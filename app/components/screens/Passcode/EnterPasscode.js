import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Passcode from './Passcode'

import * as appActions from "../../../redux/actions";

@connect(
  () => ({}),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)

class EnterPasscode extends Component {
  render() {
    const currency = this.props.navigation.getParam('currency')
    return <Passcode type={'enterPasscode'} currency={currency} />
  }
}

export default EnterPasscode;
