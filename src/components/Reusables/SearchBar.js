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
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
    setIsActive(false);
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
    <div style={{ textAlign: 'left', width: '100%' }}>
      <div onClick={() => searchSelected(history.text)} style={{ width: '100%', display: 'inline-block' }}>
        {'>>' + history.text}{' '}
      </div>
      <button style={{ position: 'absolute', right: 0 }} onClick={() => onRemove(history.id)}>
        remove
      </button>
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
    <div style={{ textAlign: 'left' }} onClick={() => searchSelected(recommendation.text)}>
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
    <div style={{ width: '100%' }}>
      <form
        style={{ backgroundColor: 'lightgray', width: '100%' }}
        onMouseLeave={() => setIsActive(false)}
        onSubmit={(e) => onSubmit(e)}>
        <input
          onClick={() => setIsActive(true)}
          onFocus={() => setIsActive(true)}
          ref={inputRef}
          onChange={(e) => onInputChanged(e)}
          value={searchValue}
          type='text'
          style={{ fontSize: '1.3em', width: '100%' }}></input>
        <input type='submit' style={{ display: 'none' }} />
        <div style={{ position: 'absolute', float: 'left', backgroundColor: 'lightgray', width: '100%' }}>
          {isActive && <HistoryList histories={historyCopy} />}
          {searchValue && isActive && <RecommendationList recommendations={recommendations} />}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
