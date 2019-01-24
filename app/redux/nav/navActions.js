import { NavigationActions, StackActions } from "react-navigation";
import { analyticsEvents } from "../../utils/analytics-util";
import { KYC_STATUSES } from "../../config/constants/common";
import { isBlacklistedCountryLocation, isBlacklistedStateLocation } from "../../utils/user-util";


function navigateTo(routeName, screenProps) {
  return (dispatch, getState) => {
    const { user } = getState().users;
    const {location} = getState().generalData;
    let goToRoute = routeName;
    if (goToRoute === 'Home') {
      if (!user) goToRoute = 'Welcome';
      else if (!user.first_name || !user.last_name) goToRoute = 'SignupTwo';
      else if (!user.has_pin) goToRoute = 'CreatePasscode';
      else if (!user.kyc || (user.kyc && user.kyc.status !== KYC_STATUSES.passed)) goToRoute = 'NoKyc';
      else if (!user.whitelisted_by_location && location && (isBlacklistedCountryLocation(location.country) || isBlacklistedStateLocation(location.region))) goToRoute = "Offline";
      else goToRoute = 'WalletBalance';
    }

    if (screenProps === true) {
      dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: goToRoute})
        ]
      }))
    } else {
      dispatch(NavigationActions.navigate({ routeName: goToRoute, params: screenProps }))
    }
    analyticsEvents.navigation(routeName)
  }
}

function navigateBack() {
  return (dispatch, getState) => {
    dispatch(NavigationActions.back())
    const activeScreen = getState().nav.routes[getState().nav.index].routeName;
    analyticsEvents.navigation(activeScreen)
  }
}

export { navigateTo, navigateBack }
