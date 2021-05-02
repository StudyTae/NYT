import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import styles from '@css/tabs/clips/styles';
import NewsComponentItem from '@components/NewsComponentItem';
import EmptyComponent from '@components/EmptyComponent';

const ClipsIndex = () => {
  const dispatch = useDispatch();
  const { clipList } = useSelector((s) => s.clips, shallowEqual); // 클립한 뉴스 리스트 상태

  //뉴스 데이터 UI
  const renderItem = ({ item }) => (
    <NewsComponentItem clipList={clipList} item={item} dispatch={dispatch} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Image
            source={require('/img/newhork.png')}
            style={styles.mainImg}
            resizeMode="contain"
          />
        }
        data={clipList || []}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        ListEmptyComponent={<EmptyComponent text={'클립된 뉴스가 없습니다.'} />}
      />
    </View>
  );
};

export default ClipsIndex;
