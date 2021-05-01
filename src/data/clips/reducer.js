/**
 * @flow
 */

import produce from 'immer';
import * as ActionTypes from './actionTypes';

const initialState = {
  clipList: [],
  recentTexts: [],
};

export const clips = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_DATA:
      return action.data || state;
    case ActionTypes.SET_CLIPS:
      return produce(state, (draft) => {
        draft.clipList = action.data;
      });
    case ActionTypes.CLEAR_CLIPS:
      return produce(state, (draft) => {
        draft.clipList = [];
      });
    case ActionTypes.SET_RECENTS:
      return produce(state, (draft) => {
        draft.recentTexts = action.data;
      });
    case ActionTypes.CLEAR_RECENTS:
      return produce(state, (draft) => {
        draft.recentTexts = [];
      });
    default:
      return state;
  }
};
