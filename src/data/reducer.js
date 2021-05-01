import { combineReducers } from 'redux';
import { clips } from '@data/clips/reducer';

const AppReducer = combineReducers({
  clips,
});

export default AppReducer;
