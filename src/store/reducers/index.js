import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  search: searchReducer,
});

export default rootReducer;
