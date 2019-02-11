import { StyleSheet, Dimensions } from 'react-native';
import {FONT_SCALE, STYLES, COLORS} from "../../../config/constants/style";

const {width} = Dimensions.get('window');

const CelButtonStyle = StyleSheet.create({
  baseButton: {
    // width: '100%',
    justifyContent: 'center',
    borderRadius: 60,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection:'row',
    opacity: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  baseTitle: {
    textAlign: 'center',
    color: 'white',
    margin: 'auto'
  },

  blueButton: {
    backgroundColor: COLORS.blue,
    borderColor: COLORS.blue,
  },
  greenButton: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  pinkButton: {
    backgroundColor: COLORS.pink,
    borderColor: COLORS.pink,
  },

  whiteButton: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  whiteBtnTitle: { color: 'transparent', margin: 'auto' },

  letterButton: { borderRadius: 15, height: 30, width: width/3, borderWidth: 0, justifyContent: 'flex-start', paddingLeft: 0 },
  letterBtnTitle: { fontSize: FONT_SCALE * 13, fontFamily: 'agile-medium', margin: 'auto' },

  microButton: { borderRadius: 15, height: 30, width: width/3, borderWidth: 1 },
  microBtnTitle: { fontSize: FONT_SCALE * 13, fontFamily: 'agile-medium', margin: 'auto' },
  miniButton: { borderRadius: 20, height: 40, paddingLeft: 10, paddingRight: 10, },
  miniBtnTitle: { fontSize: FONT_SCALE * 16, fontFamily: 'agile-medium', margin: 'auto' },
  smallButton: { borderRadius: 25, height: 50 },
  smallBtnTitle: { fontSize: FONT_SCALE * 16, fontFamily: 'agile-medium', margin: 'auto' },
  mediumButton: { borderRadius: 30, height: 60 },
  mediumBtnTitle: { fontSize: FONT_SCALE * 20, fontFamily: 'agile-medium', margin: 'auto' },

  inverseButton: {
    backgroundColor: 'transparent',
  },

  transparentButton: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  transparentBtnTitle: {
    color: 'white',
    opacity: 0.7,
    margin: 'auto'
  },

  disabledButton: {
    opacity: 0.5,
    backgroundColor: 'transparent',
  },

  loader: {
    width: 30,
    height: 30
  },

  // TODO(fj) remove when All Buttons are refactored
  button: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection:'row'
  },
  title: {
    fontSize: FONT_SCALE * 20,
    textAlign: 'center',
    fontFamily: 'agile-medium',
    color: 'rgba(65,86,166,1)'
  },
  btnContent: {
    flexDirection: 'row',
    opacity: 1
  },
  disabledStyles: {
    backgroundColor: STYLES.PRIMARY_BLUE,
    borderColor: 'rgba(255,255,255,0.3)',
    borderWidth: 2
  },
  disabledTextStyles: {
    color: 'rgba(255,255,255,0.3)'
  },
});

export default CelButtonStyle;