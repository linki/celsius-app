// TODO(fj): init segment in app actions (removed from App.v2.js)
// TODO(fj): move handle app state change to app action (removed logic from App.v2.js)
// TODO(fj): move app loading assets to app action (removed logic from App.v2.js)
// TODO(fj): merge App and MainLayout?

// TODO(fj): create offline and no internet screens or a static screen with type?

import React, { Component } from "react";
// import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { AppState, BackHandler, StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen";
import codePush from "react-native-code-push";
import * as Font from "expo-font";
// import appsFlyer from "react-native-appsflyer";

import store from "./redux/store";
import * as actions from "./redux/actions";
import appUtil from "./utils/app-util";
import AppNavigation from "./navigator/Navigator";
import FabMenu from "./components/organisms/FabMenu/FabMenu";
import Message from "./components/molecules/Message/Message";
// import captureException from './utils/errorhandling-util'
import ErrorBoundary from "./ErrorBoundary";

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}
@codePush
export default class App extends Component {
  constructor(props) {
    super(props);
    // this.onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
    //   data => {
    //     console.log("OVO TREBRAAA: ", data);
    //   }
    // );

    // this.onAppOpenAttributionCanceller = appsFlyer.onAppOpenAttribution(
    //   data => {
    //     console.log("OVO TREBRAAA NAM TREBA: ", data);
    //   }
    // );
    this.state = {
      appState: AppState.currentState
    };
  }

  async componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      store.dispatch(actions.navigateBack());
      return true;
    });
    // AppState.addEventListener('change', nextState =>
    //   store.dispatch(actions.handleAppStateChange(nextState))
    // )
    AppState.addEventListener("change", this._handleAppStateChange);

    await this.initApp();
    appUtil.initializeThirdPartyServices();
    StyleSheet.setStyleAttributePreprocessor(
      "fontFamily",
      Font.processFontFamily
    );
    SplashScreen.hide();
  }

  componentWillUnmount() {
    this.backHandler.remove();
    // AppState.removeEventListener('change', nextState =>
    //   store.dispatch(actions.handleAppStateChange(nextState))
    // )
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/active|foreground/) &&
      nextAppState === "background"
    ) {
      if (this.onInstallConversionDataCanceller) {
        this.onInstallConversionDataCanceller();
        // console.log("unregister onInstallConversionDataCanceller");
      }
      if (this.onAppOpenAttributionCanceller) {
        this.onAppOpenAttributionCanceller();
        // console.log("unregister onAppOpenAttributionCanceller");
      }
    }

    this.setState({ appState: nextAppState });
  };

  initApp = async () => await store.dispatch(await actions.loadCelsiusAssets());

  render() {
    return (
      <ErrorBoundary>
        <CelsiusApplication />
      </ErrorBoundary>
    );
  }
}

const CelsiusApplication = () => (
  <Provider store={store}>
    <React.Fragment>
      <AppNavigation
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getActiveRouteName(currentState);
          const prevScreen = getActiveRouteName(prevState);

          if (prevScreen !== currentScreen) {
            store.dispatch(actions.setActiveScreen(currentScreen));
          }
        }}
        ref={navigatorRef => actions.setTopLevelNavigator(navigatorRef)}
      />
      <Message />
      <FabMenu />
    </React.Fragment>
  </Provider>
);
