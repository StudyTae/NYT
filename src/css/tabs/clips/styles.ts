import { StyleSheet,ViewStyle, ImageStyle} from 'react-native';


interface Style {
  container: ViewStyle;
  mainImg: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainImg: {
    marginLeft: '5%',
    width: '90%',
  },
});
