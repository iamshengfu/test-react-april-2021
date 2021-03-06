import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { searchActions } from '../store/reducers/searchReducer';
import { fetchHistories, fetchRecommendation, deleteHisotry, addHistory } from '../services/searchService';

// Saga to handle load history

function* getHistories(action) {
  try {
    const response = yield call(fetchHistories);
    yield put(searchActions.LOAD_HISTORY_SUCCESS(response.data));
  } catch (e) {
    yield put(searchActions.LOAD_HISTORY_FAILURE(e.toString()));
  }
}

function* getHistorySaga() {
  yield takeEvery(searchActions.LOAD_HISTORY_REQUEST, getHistories);
}

// Saga to handle load recommendation

function* getRecommendation(action) {
  try {
    const response = yield call(fetchRecommendation, action.payload);
    yield put(searchActions.LOAD_RECOMMENDATION_SUCCESS(response.data));
  } catch (e) {
    yield put(searchActions.LOAD_RECOMMENDATION_FAILURE(e.toString()));
  }
}

function* dispatchGetRecommendation(action) {
  yield put(searchActions.LOAD_RECOMMENDATION_REQUEST(action.payload));
}

function* inputSaga() {
  yield takeEvery(searchActions.SEARCH_INPUT_CHANGED, dispatchGetRecommendation);
}

function* recommendationSaga() {
  yield takeEvery(searchActions.LOAD_RECOMMENDATION_REQUEST, getRecommendation);
}

// Saga to add or delete history

function* deleteHisotry1(action) {
  try {
    yield call(deleteHisotry, action.payload);
    yield put(searchActions.REMOVE_HISTORY_SUCCESS(action.payload));
  } catch (e) {
    console.log('delete history failed');
  }
}

function* addHistory1(action) {
  try {
    const response = yield call(addHistory, action.payload);
    yield put(searchActions.ADD_HISTORY_SUCCESS(response.data));
  } catch (e) {
    console.log('add history failed');
  }
}

function* deleteHistorySaga() {
  yield takeEvery(searchActions.REMOVE_HISTORY_REQUEST, deleteHisotry1);
}

function* addHistorySaga() {
  yield takeEvery(searchActions.ADD_HISTORY_REQUEST, addHistory1);
}

// Export Saga

function* mainSaga() {
  yield fork(getHistorySaga);
  yield fork(inputSaga);
  yield fork(recommendationSaga);
  yield fork(addHistorySaga);
  yield fork(deleteHistorySaga);
}

export default mainSaga;
