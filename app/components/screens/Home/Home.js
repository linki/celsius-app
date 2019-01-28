import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appActions from "../../../redux/actions";
import HomeStyle from "./Home.styles";
import CircleButton from "../../atoms/CircleButton/CircleButton";
import STYLES from "../../../constants/STYLES";
import CelText from "../../atoms/CelText/CelText";
import CelButton from "../../atoms/CelButton/CelButton";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";

@connect(
  state => ({
    style: HomeStyle(state.ui.theme),
    theme: state.ui.theme,
    appInitialized: state.app.appInitialized
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class Home extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  async componentWillMount() {
    const { actions, appInitialized } = this.props;
    if (!appInitialized) actions.initCelsiusApp();
  }

  render() {
    const { actions, theme } = this.props;
    return (
      <RegularLayout>
        <React.Fragment>
          <CelText color="red">Welcome to Home Screen</CelText>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <CircleButton icon={theme === 'light' ? 'Close' : false} theme={theme} type="theme" style={[{ backgroundColor: '#fff', borderWidth: 1 }, theme === 'light' ? {} : { borderColor: 'transparent' }]} onPress={() => { actions.setAppTheme('light') }} />
            <CircleButton icon={theme === 'dark' ? 'Close' : false} theme={theme} type="theme" style={[{ backgroundColor: STYLES.COLORS.DARK, borderWidth: 1 }, theme === 'dark' ? {} : { borderColor: 'transparent' }]} onPress={() => { actions.setAppTheme('dark') }} />
            <CircleButton icon={theme === 'celsius' ? 'Close' : false} theme={theme} type="theme" style={[{ backgroundColor: STYLES.COLORS.CELSIUS, borderWidth: 1 }, theme === 'celsius' ? {} : { borderColor: 'transparent' }]} onPress={() => { actions.setAppTheme('celsius') }} />
          </View>

          <View>
            <CelButton onPress={() => { }}>Join Celsius</CelButton>
            <CelButton onPress={() => { }} iconRight="IconArrowRight">Create account</CelButton>
            <CelButton onPress={() => { }} loading>Create account</CelButton>
            <CelButton onPress={() => { }} disabled>Disabled</CelButton>
            <CelButton onPress={() => { }} basic>Logout</CelButton>
          </View>
        </React.Fragment>
      </RegularLayout>
    );
  }
}

export default Home;
