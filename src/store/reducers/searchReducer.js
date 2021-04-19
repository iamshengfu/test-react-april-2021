import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  histories: {
    loading: false,
    data: [],
    errorMsg: '',
  },
  recommendations: {
    loading: false,
    data: [],
    errorMsg: '',
  },
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    SEARCH_INPUT_CHANGED: () => {},
    LOAD_HISTORY_REQUEST: (state) => {
      state.histories.loading = true;
    },
    LOAD_HISTORY_FAILURE: (state, action) => {
      state.histories.loading = false;
      state.histories.errorMsg = action.payload;
    },
    LOAD_HISTORY_SUCCESS: (state, action) => {
      state.histories.loading = false;
      state.histories.data = action.payload;
    },
    REMOVE_HISTORY_REQUEST: () => {},
    REMOVE_HISTORY_SUCCESS: (state, action) => {
      state.histories.data = state.histories.data.filter((item) => item.id !== action.payload);
    },
    ADD_HISTORY_REQUEST: () => {},
    ADD_HISTORY_SUCCESS: (state, action) => {
      state.histories.data.push(action.payload);
    },
    /////////////////////////////////////////////////
    LOAD_RECOMMENDATION_REQUEST: (state) => {
      state.recommendations.loading = true;
    },
    LOAD_RECOMMENDATION_FAILURE: (state, action) => {
      state.recommendations.loading = false;
      state.recommendations.errorMsg = action.payload;
    },
    LOAD_RECOMMENDATION_SUCCESS: (state, action) => {
      state.recommendations.loading = false;
      state.recommendations.data = action.payload;
    },
  },
});

export default searchSlice.reducer;

const {
  SEARCH_INPUT_CHANGED,
  LOAD_HISTORY_REQUEST,
  LOAD_HISTORY_FAILURE,
  LOAD_HISTORY_SUCCESS,
  LOAD_RECOMMENDATION_REQUEST,
  LOAD_RECOMMENDATION_FAILURE,
  LOAD_RECOMMENDATION_SUCCESS,
  REMOVE_HISTORY_REQUEST,
  REMOVE_HISTORY_SUCCESS,
  ADD_HISTORY_REQUEST,
  ADD_HISTORY_SUCCESS,
} = searchSlice.actions;

export const searchActions = {
  SEARCH_INPUT_CHANGED,
  LOAD_HISTORY_REQUEST,
  LOAD_HISTORY_FAILURE,
  LOAD_HISTORY_SUCCESS,
  LOAD_RECOMMENDATION_REQUEST,
  LOAD_RECOMMENDATION_FAILURE,
  LOAD_RECOMMENDATION_SUCCESS,
  REMOVE_HISTORY_REQUEST,
  REMOVE_HISTORY_SUCCESS,
  ADD_HISTORY_REQUEST,
  ADD_HISTORY_SUCCESS,
};
