import { StyleSheet,ViewStyle, ImageStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  headerButton: ViewStyle;
  headerIcon: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  headerButton: {
    width: 25,
    height: 25,
  },
  headerIcon: { width: '100%', height: '100%' },
});
