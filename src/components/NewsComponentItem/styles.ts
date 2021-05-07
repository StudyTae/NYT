import {  ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Style {
  newsConponentButton: ViewStyle;
  newsClipButton: ViewStyle;
  newsClipImg: ImageStyle;
  newsHeadTitle: TextStyle;
}


export default StyleSheet.create<Style>({
  newsConponentButton: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  newsClipButton: { alignSelf: 'flex-end' },
  newsClipImg: { width: 25, height: 25 },
  newsHeadTitle: { fontWeight: 'bold', marginBottom: 2 },
});
