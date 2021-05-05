import { News } from '../types/NewYorkTimes';
export const INIT_DATA = 'INIT_DATA';
export const SET_CLIPS = 'SET_CLIPS';
export const CLEAR_CLIPS = 'CLEAR_CLIPS';
export const SET_RECENTS = 'SET_RECENTS';
export const CLEAR_RECENTS = 'CLEAR_RECENTS';
export const SET_SEARCHTEXT = 'SET_SEARCHTEXT';

export interface InitData {
  clipList: News[];
  recentTexts: string[];
  searchCurrentText: string;
}

export interface InitDataAction {
  type: typeof INIT_DATA;
  data: InitData;
}

export interface SetClipsAction {
  type: typeof SET_CLIPS;
  data: News[];
}

export interface ClearClipsAction {
  type: typeof CLEAR_CLIPS;
}

export interface SetRecentsAction {
  type: typeof SET_RECENTS;
  data: string;
}

export interface ClearRecentsAction {
  type: typeof CLEAR_RECENTS;
}

export interface SetSearchTextAction {
  type: typeof SET_SEARCHTEXT;
  data: string;
}

export type ClipsActions =
  | InitDataAction
  | SetClipsAction
  | ClearClipsAction
  | SetRecentsAction
  | ClearRecentsAction
  | SetSearchTextAction;

export default {
  INIT_DATA,
  SET_CLIPS,
  CLEAR_CLIPS,
  SET_RECENTS,
  CLEAR_RECENTS,
  SET_SEARCHTEXT,
};
