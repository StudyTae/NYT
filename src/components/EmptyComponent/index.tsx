import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  text: string;
}

//리스트가 비어있을때 보여지는 컴포넌트
const EmptyComponent = React.memo<Props>(({ text }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
));

export default EmptyComponent;
