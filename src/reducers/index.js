import { combineReducers } from 'redux';
import CommentReducer from './reducer_comment';

const rootReducer = combineReducers({
  comments: CommentReducer
});

export default rootReducer;
