import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  movies: [],
  errorMessage: null,
  totalPages: 1,
  totalResults: 0,
  searchingValue: '',
  searchingPage: 1,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState: initialState,
  reducers: {
    SEARCH_MOVIES_REQUEST: {
      reducer: (state, action) => {
        state.loading = true;
        state.searchingValue = action.payload.searchValue;
        state.searchingPage = action.payload.searchingPage;
      },
      prepare: (searchValue, page) => {
        return {
          payload: {
            searchValue: searchValue,
            page: page,
          },
        };
      },
    },
    SEARCH_MOVIES_SUCCESS: {
      reducer: (state, action) => {
        state.loading = false;
        state.movies = action.payload.movies;
        state.totalPages = action.payload.totalPages;
        state.totalResults = action.payload.totalResults;
      },
      prepare: (responseData) => {
        return {
          payload: {
            movies: responseData.Search,
            totalPages: Math.ceil(responseData.totalResults / 10),
            totalResults: responseData.totalResults,
          },
        };
      },
    },
    SEARCH_MOVIES_FAILURE: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default movieSlice.reducer;

const { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE } = movieSlice.actions;

export const movieActions = {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
};
