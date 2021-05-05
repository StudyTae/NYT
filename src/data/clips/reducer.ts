/**
 * @flow
 */

import produce from 'immer';
import * as ActionTypes from './actionTypes';
import { ClipsActions } from './actionTypes';
import { News } from '../types/NewYorkTimes';

interface initialStateProps {
  clipList: News[];
  recentTexts: string[];
  searchCurrentText?: string;
}

const initialState = {
  clipList: [],
  recentTexts: [],
  searchCurrentText: '',
};

export const clips = (
  state: initialStateProps = initialState,
  action: ClipsActions,
) => {
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
        if (draft.recentTexts.length >= 5) {
          draft.recentTexts.splice(0, 1);
        }
        if (action.data && !draft.recentTexts.includes(action.data)) {
          draft.recentTexts = draft.recentTexts.concat(action.data);
        }
      });
    case ActionTypes.CLEAR_RECENTS:
      return produce(state, (draft) => {
        draft.recentTexts = [];
      });
    case ActionTypes.SET_SEARCHTEXT:
      return produce(state, (draft) => {
        draft.searchCurrentText = action.data;
      });
    default:
      return state;
  }
};
