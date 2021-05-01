import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { apiNYT } from '@common/api';
import moment from 'moment';
import { shallowEqual, useSelector } from 'react-redux';
import styles from '@css/tabs/search/styles';

const SearchIndex = () => {
  const { clipList } = useSelector((s) => s.clips, shallowEqual);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const initalize = async () => {
      const params = {
        q: 'election',
      };
      const {
        data: { response },
        status,
      } = await apiNYT.get('/articlesearch.json', {
        params,
      });
      if (status === 200) {
        return response?.docs || [];
      }
    };
    initalize().then(setNews).catch(console.error);
  }, []);

  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        margin: 5,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
      }}
    >
      <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
        <Image
          source={require('/img/clip-off.png')}
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', marginBottom: 2 }}>
        {'<헤드라인>'}
      </Text>
      <Text>{item.headline.main}</Text>
      <Text style={{ fontWeight: 'bold', marginBottom: 2, marginTop: 5 }}>
        {'<기사작성일>'}
      </Text>
      <Text>{moment(item.pub_date).format('YYYY-MM-DD')}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={news || []}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default SearchIndex;
