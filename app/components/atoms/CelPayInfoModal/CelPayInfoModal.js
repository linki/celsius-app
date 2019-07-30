import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CelModal from "../../organisms/CelModal/CelModal";
import {MODALS} from "../../../constants/UI";
import CelText from "../CelText/CelText";
import CelButton from "../CelButton/CelButton";
import * as appActions from "../../../redux/actions";

@connect(
  () => ({}),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class CelPayInfoModal extends Component {
  static propTypes = {};
  static defaultProps = {}

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { actions } = this.props

    return (
      <CelModal
        name={MODALS.CEL_PAY_INFO_MODAL}
      >
        <CelText type="H2" weight="bold" align={"center"} margin={"0 0 20 0"}>Congrats!</CelText>
        <CelText type={"H4"} align={"center"} weight='300' margin={"0 0 20 0"}>All of your contacts have been added to your wallet. Get started with CelPay and transfer crypto between friends faster and easier than ever before.</CelText>

        <CelButton
          onPress={ () => {
            actions.navigateTo("CelPayChooseFriend")
            actions.closeModal()
          }}
        >
          Go to CelPay
        </CelButton>
      </CelModal>
    );
  }
}

export default CelPayInfoModal
