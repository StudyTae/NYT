import { StyleSheet,ViewStyle, ImageStyle, TextStyle } from 'react-native';


interface Style {
  container: ViewStyle;
  headerArea: ViewStyle;
  textInput: ViewStyle;
  mainImg: ImageStyle;
  boldText: TextStyle;
  recentButton: ViewStyle;
}


export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerArea: {
    marginLeft: '5%',
  },
  textInput: {
    width: '90%',
    height: 30,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  mainImg: {
    width: '90%',
  },
  boldText: {
    fontWeight: 'bold',
  },
  recentButton: {
    marginTop: 5,
    marginBottom: 5,
  },
});
