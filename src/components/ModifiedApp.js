import React, { useRef } from 'react';
import Header from './Header';
import Movie from './Movie';
import spinner from '../assets/ajax-loader.gif';
import Search from './Search';
import '../App.css';
import PageSelection from './PageSelection';
import { movieActions } from '../reducers/movieReducer';
import { useSelector, useDispatch } from 'react-redux';

const ModifiedApp = () => {
  const state = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const selectedPage = useRef(1);
  const searchedText = useRef('batman');

  const search = (searchValue) => {
    searchedText.current = searchValue;
    dispatch(movieActions.SEARCH_MOVIES_REQUEST(searchValue, selectedPage.current));
  };

  const goToPage = (page) => {
    if (selectedPage.current === page) {
      return;
    }
    selectedPage.current = page;
    search(searchedText.current);
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className='spinner' src={spinner} alt='Loading spinner' />
    ) : errorMessage ? (
      <div className='errorMessage'>{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <div style={{ width: '300px' }}>
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        </div>
      ))
    );

  return (
    <div className='App'>
      <div className='m-container'>
        <Header text='Modified Version' />

        <Search search={search} />
        <PageSelection
          pageNumber={state.pageNumber}
          totalPages={state.totalPages}
          totalResults={state.totalResults}
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
