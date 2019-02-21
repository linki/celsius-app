import React, { Component } from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import formatter from "../../../utils/formatter";

import testUtil from "../../../utils/test-util";
import * as appActions from "../../../redux/actions";
// import CelPayMessageStyle from "./CelPayMessage.styles";
import RegularLayout from '../../layouts/RegularLayout/RegularLayout';
import CelButton from '../../../components/atoms/CelButton/CelButton';
// import CelTextArea from '../../atoms/CelTextArea/CelTextArea';
import CelInput from '../../atoms/CelInput/CelInput';

@connect(
  state => ({
    formData: {
      ...state.forms.formData,
      friend: {
        first_name: 'Pera',
        last_name: 'Detlic',
      }
    },
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class CelPayMessage extends Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);

    const { friend } = props.formData
    this.state = {
      header: {
        title: `Send to ${friend.first_name} ${friend.last_name[0]}.`,
        left: "back",
        right: "profile"
      }
    };
  }

  handleSend = () => {
    const { actions } = this.props

    actions.navigateTo('VerifyProfile', {
      // TODO: call an action that creates a transfer and navigates to TransactionDetails
      onSuccess: () => actions.navigateTo('WalletLanding')
    })
  }

  // Link coin and amount from previous screen
  render() {
    const { header } = this.state;
    const { formData } = this.props;
    // const style = CelPayMessageStyle();

    return (
      <RegularLayout header={header}>
        <View style={{ width: '100%' }}>
          <CelInput
            placeholder="Notes (optional)"
            type="text-area"
            field="message"
            value={formData.message}
            numberOfLines={15}
          />

          <CelButton
            iconRight={"IconArrowRight"}
            margin="0 0 0 0"
            onPress={this.handleSend}
          >
            Send {formatter.crypto(formData.amountUsd)}
          </CelButton>
        </View>
      </RegularLayout>
    );
  }
}

export default testUtil.hookComponent(CelPayMessage);
