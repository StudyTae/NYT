import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
import { handleClips, showWebView } from '@common/helpers';
import { useNavigation } from '@react-navigation/native';
import { shallowEqual, useSelector } from 'react-redux';
import clipsTypes from '@data/clips/actionTypes';
import styles from './styles';

//뉴스 리스트 컴포넌트 UI
const NewsComponentItem = React.memo(({ dispatch, item, clipList }) => {
  const navigation = useNavigation();
  const { searchCurrentText } = useSelector((s) => s.clips, shallowEqual);
  return (
    <TouchableOpacity
      style={styles.newsConponentButton}
      onPress={() => {
        dispatch({ type: clipsTypes.SET_RECENTS, data: searchCurrentText });
        showWebView(item, navigation);
      }}
    >
      <TouchableOpacity
        style={styles.newsClipButton}
        onPress={() => dispatch(handleClips(clipList, item))}
      >
        <Image
          source={
            clipList.findIndex((clip) => clip._id === item._id) >= 0
              ? require('/img/clip-on.png')
              : require('/img/clip-off.png')
          }
          style={styles.newsClipImg}
        />
      </TouchableOpacity>
      <Text style={styles.newsHeadTitle}>{'<헤드라인>'}</Text>
      <Text>{item.headline.main}</Text>
      <Text style={[styles.newsHeadTitle, { marginTop: 5 }]}>
        {'<기사작성일>'}
      </Text>
      <Text>{moment(item.pub_date).format('YYYY-MM-DD')}</Text>
    </TouchableOpacity>
  );
});

export default NewsComponentItem;
