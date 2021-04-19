import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import movieSaga from '../sagas/movieSaga';
import searchSaga from '../sagas/searchSaga';

export function getStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(movieSaga);
  sagaMiddleware.run(searchSaga);
  return store;
}

export default getStore();
