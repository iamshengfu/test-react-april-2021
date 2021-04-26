import React, { useRef } from 'react';
import Header from './Header';
import Movie from './Movie';
import spinner from '../../assets/ajax-loader.gif';
import '../../App.css';
import PageSelection from './PageSelection';
import { movieActions } from '../../store/reducers/movieReducer';
import { searchActions } from '../../store/reducers/searchReducer';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar';

const ModifiedApp = () => {
  const movieState = useSelector((state) => state.movie);
  const searchState = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const selectedPage = useRef(1);
  const searchedText = useRef('batman');

  const search = (searchValue) => {
    searchedText.current = searchValue;
    dispatch(searchActions.ADD_HISTORY_REQUEST(searchValue));
    dispatch(movieActions.SEARCH_MOVIES_REQUEST(searchValue, selectedPage.current));
  };

  const goToPage = (page) => {
    if (selectedPage.current === page) {
      return;
    }
    selectedPage.current = page;
    search(searchedText.current);
  };

  const { movies, errorMessage, loading } = movieState;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className='spinner' src={spinner} alt='Loading spinner' />
    ) : errorMessage ? (
      <div className='errorMessage'>{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <div key={`${index}-${movie.Title}`} style={{ width: '300px' }}>
          <Movie movie={movie} />
        </div>
      ))
    );

  return (
    <div className='App'>
      <div>
        {/* <Header text='Modified Version' /> */}
        <SearchBar
          search={search}
          histories={searchState.histories.data}
          recommendations={searchState.recommendations.data}
          SEARCH_INPUT_CHANGED={searchActions.SEARCH_INPUT_CHANGED}
          REMOVE_HISTORY_REQUEST={searchActions.REMOVE_HISTORY_REQUEST}
          LOAD_HISTORY_REQUEST={searchActions.LOAD_HISTORY_REQUEST}></SearchBar>
        <br></br>
        <PageSelection
          pageNumber={movieState.pageNumber}
          totalPages={movieState.totalPages}
          totalResults={movieState.totalResults}
          goToPage={goToPage}
        />
        <br></br>
        <br></br>

        <div className='movies' style={{ justifyContent: 'center', display: 'flex' }}>
          {retrievedMovies}
        </div>
      </div>
    </div>
  );
};

export default ModifiedApp;
