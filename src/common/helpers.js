import clipsTypes from '@data/clips/actionTypes';

//클립 이벤트 핸들러
export const handleClips = (clipList, item) => (dispatch) => {
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
export const showWebView = (item, navigation) => {
  navigation.navigate('Webview', { url: item.web_url, newsitem: item });
};

export default { handleClips, showWebView };
