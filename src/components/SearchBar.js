import React, { useEffect, useState, useRef, useCallback } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';

const SearchBar = ({
  histories,
  recommendations,
  search,
  SEARCH_INPUT_CHANGED,
  LOAD_HISTORY_REQUEST,
  REMOVE_HISTORY_REQUEST,
}) => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  var historyCopy = [...histories];
  historyCopy = historyCopy.sort((a, b) => b.time - a.time).slice(0, 10);

  const [searchValue, setsearchValue] = useState('');
  const [inputActive, setInputActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
    dispatch(LOAD_HISTORY_REQUEST());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== '') {
      search(searchValue);
      setsearchValue('');
    }
  };

  const getRecommendationSaved = useCallback(
    debounce((nextVal) => {
      dispatch(SEARCH_INPUT_CHANGED(nextVal));
    }, 300),
    []
  );

  const onInputChanged = (e) => {
    setsearchValue(e.target.value);
    if (e.target.value !== '') {
      getRecommendationSaved(e.target.value);
    }
  };

  const onRemove = (id) => {
    dispatch(REMOVE_HISTORY_REQUEST(id));
  };

  const searchSelected = (val) => {
    search(val);
  };

  //----------------------------------------------------------------------------------------------

  const HistoryRow = ({ history }) => (
    <div style={{ padding: '7px', textAlign: 'left', width: '100%', borderBottom: '1px lightgrey solid' }}>
      <div onClick={() => searchSelected(history.text)} style={{ width: '100%', display: 'inline-block' }}>
        {'>>' + history.text}{' '}
      </div>
      <a
        style={{ position: 'absolute', right: 0 }}
        onClick={(e) => {
          e.preventDefault();
          onRemove(history.id);
        }}>
        remove
      </a>
    </div>
  );

  const HistoryList = ({ histories }) => (
    <div style={{ width: '100%' }}>
      {histories.map((history) => (
        <HistoryRow key={history.id} history={history}></HistoryRow>
      ))}
    </div>
  );
  const RecommendationRow = ({ recommendation }) => (
    <div
      style={{ textAlign: 'left', padding: '7px', borderBottom: '1px lightgrey solid' }}
      onClick={() => {
        searchSelected(recommendation.text);
        setDropdownActive(true);
      }}>
      {'Recommend: ' + recommendation.text}
    </div>
  );
  const RecommendationList = ({ recommendations }) => (
    <div style={{ width: '100%' }}>
      {recommendations.map((recommendation) => (
        <RecommendationRow key={recommendation.id} recommendation={recommendation}></RecommendationRow>
      ))}
    </div>
  );

  return (
    <div style={{ width: '100%', marginBottom: '2em', position: 'relative' }}>
      <form
        style={{ margin: '0.3em', width: '100%', position: 'absolute', float: 'left' }}
        onSubmit={(e) => onSubmit(e)}>
        <input
          onClick={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
          ref={inputRef}
          onChange={(e) => {
            onInputChanged(e);
            setInputActive(true);
          }}
          value={searchValue}
          type='text'
          style={{ fontSize: '1.3em', width: '100%' }}></input>
        <input type='submit' style={{ display: 'none' }} />
        <div
          onBlur={(e) => {
            setDropdownActive(false);
          }}
          onMouseDown={() => setDropdownActive(true)}
          tabIndex='100'
          style={{ backgroundColor: 'white', width: '100%' }}>
          {(inputActive || dropdownActive) && <HistoryList histories={historyCopy} />}
          {searchValue && (inputActive || dropdownActive) && <RecommendationList recommendations={recommendations} />}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
