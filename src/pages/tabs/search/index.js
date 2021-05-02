import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  FlatList,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { apiNYT } from '@common/api';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import NewsComponentItem from '@components/NewsComponentItem';
import EmptyComponent from '@components/EmptyComponent';
import produce from 'immer';
import clipsTypes from '@data/clips/actionTypes';
import styles from '@css/tabs/search/styles';

const SearchIndex = (props) => {
  const dispatch = useDispatch();
  const { clipList, recentTexts } = useSelector((s) => s.clips, shallowEqual); // 클립한 뉴스 리스트 상태
  const [news, setNews] = useState([]); // 뉴스 데이터 리스트
  const [searchText, setSearchText] = useState(''); // 검색어
  const [page, setPage] = useState(0); // 페이지 수
  const onEndReachedCalledDuringMomentum = useRef(); // 뉴스 리스트 참조

  const initalize = useCallback(
    async (paramtext, currentPage) => {
      const params = {
        q: paramtext || '',
        page: currentPage === 'init' ? 0 : currentPage || page,
      };

      const {
        data: { response },
        status,
      } = await apiNYT.get('/articlesearch.json', {
        params,
      });
      if (status === 200) {
        setPage(parseInt(params.page)); // 현재 페이지 저장
        return response || [];
      }
    },
    [page],
  );

  //초기 뉴스 데이터 불러오기
  useEffect(() => {
    onEndReachedCalledDuringMomentum.current = true;
    initalize().then(setNews).catch(console.error);
  }, []);

  //뉴스 데이터 UI
  const renderItem = ({ item }) => (
    <NewsComponentItem clipList={clipList} item={item} dispatch={dispatch} />
  );

  //검색어 입력시 이벤트 핸들러
  const handleSearch = useCallback(
    async (text) => {
      try {
        dispatch({ type: clipsTypes.SET_SEARCHTEXT, data: text });
        await setSearchText(text);
        const response = await initalize(text, 'init');
        setNews(response);
      } catch (err) {
        console.error(err);
        alert('뉴스리스트를 불러오기에 실패하였습니다.');
      }
    },
    [news, page],
  );

  //리스트 스크롤시 발생하는 이벤트
  const handleEndReached = useCallback(async () => {
    if (!onEndReachedCalledDuringMomentum.current) {
      const response = await initalize(searchText, page + 1);
      setNews(
        produce((draft) => {
          draft.docs = draft.docs.concat(response.docs);
        }),
      );
    }
    onEndReachedCalledDuringMomentum.current = true;
  }, [searchText, news, page, onEndReachedCalledDuringMomentum.current]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.headerArea}>
            <Image
              source={require('/img/newhork.png')}
              style={styles.mainImg}
              resizeMode="contain"
            />
            <TextInput
              style={{
                ...styles.textInput,
                borderColor: searchText.length > 0 ? 'red' : 'gray',
              }}
              placeholder="검색기사를 입력해주세요."
              value={searchText}
              onChangeText={handleSearch}
            />
            <Text style={styles.boldText}>최근 검색어</Text>
            {recentTexts.map((text, index) => (
              <TouchableOpacity
                key={`${text}-${index}`}
                style={{
                  marginTop: 5,
                  marginBottom: text.length === index + 1 && 5,
                }}
                onPress={() => {
                  setSearchText(text);
                  initalize(text, 'init').then(setNews).catch(console.error);
                }}
              >
                <Text
                  style={{ ...styles.boldText, color: 'blue' }}
                >{`・ ${text}`}</Text>
              </TouchableOpacity>
            ))}
          </View>
        }
        data={news?.docs || []}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ paddingBottom: 10 }}
        ListEmptyComponent={<EmptyComponent text="검색된 뉴스가 없습니다." />}
        onScrollBeginDrag={() => {
          onEndReachedCalledDuringMomentum.current = false;
        }}
        onEndReachedThreshold={0.4}
        onEndReached={handleEndReached}
      />
    </View>
  );
};

export default SearchIndex;
