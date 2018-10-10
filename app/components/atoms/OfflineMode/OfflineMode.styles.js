import { StyleSheet, Dimensions } from 'react-native';
import { STYLES } from "../../../config/constants/style";

const {width, height} = Dimensions.get('window');

const OfflineModeStyle = StyleSheet.create({
  background: {
    height,
    width,
    backgroundColor: STYLES.GRAY_1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: width/2,
    height: height/4
  },
  header: {
    textAlign: 'center',
    marginTop: 20
  },
  explanation: {
    textAlign: 'center',
    marginTop: 10
  }
});

export default OfflineModeStyle;