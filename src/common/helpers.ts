import clipsTypes from '@data/clips/actionTypes';
import { NavigationProp, ParamListBase } from '@react-navigation/core';
import { Dispatch } from 'redux';
import { News } from '@data/types/NewYorkTimes';

//클립 이벤트 핸들러
export const handleClips = (clipList: News[], item: News) => (
  dispatch: Dispatch<any>,
) => {
  if (clipList.findIndex((clip) => clip._id === item._id) >= 0) {
    dispatch({
      type: clipsTypes.SET_CLIPS,
      data: clipList.filter((clip) => clip._id !== item._id),
    });
  } else {
    dispatch({
      type: clipsTypes.SET_CLIPS,
      data: clipList.concat(item),
    });
  }
};

//웹 페이지 노출 핸들러
export const showWebView = (
  item: News,
  navigation: NavigationProp<ParamListBase>,
) => {
  navigation.navigate('Webview', { url: item.web_url, newsitem: item });
};

export default { handleClips, showWebView };
