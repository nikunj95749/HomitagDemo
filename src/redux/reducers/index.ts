import { combineReducers } from 'redux';
import { dashBoardReducer } from './DashBoardReducer';

export const rootReducer = combineReducers({
  dashBoard: dashBoardReducer,
});
