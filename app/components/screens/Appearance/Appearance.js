import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import testUtil from "../../../utils/test-util";
import * as appActions from "../../../redux/actions";
import AppearanceStyle from "./Appearance.styles";

@connect(
  state => ({
    style: AppearanceStyle(state.ui.theme),
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class Appearance extends Component {

  static propTypes = {
    // text: PropTypes.string
  };
  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style } = this.props
    return (
      <View style={style.container}>
        <Text>Hello Appearance</Text>
      </View>
    );
  }
}

export default testUtil.hookComponent(Appearance);