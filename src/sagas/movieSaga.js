import { call, put, takeEvery } from 'redux-saga/effects';
import { movieActions } from '../reducers/movieReducer';
import { fetchMovies } from '../services/index';

function* getMovies(action) {
  try {
    const response = yield call(fetchMovies, action.payload.searchValue, action.payload.page);
    yield put(movieActions.SEARCH_MOVIES_SUCCESS(response.data));
  } catch (e) {
    console.log(e);
    yield put(movieActions.SEARCH_MOVIES_FAILURE(e.toString()));
  }
}

function* movieSaga() {
  yield takeEvery(movieActions.SEARCH_MOVIES_REQUEST, getMovies);
}

export default movieSaga;
