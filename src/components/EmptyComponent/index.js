import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

//리스트가 비어있을때 보여지는 컴포넌트
const EmptyComponent = React.memo(({ text }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
));

export default EmptyComponent;
