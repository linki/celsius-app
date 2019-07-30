import React, { Component } from 'react';

import CelModal from "../../organisms/CelModal/CelModal";
import {MODALS} from "../../../constants/UI";
import CelText from "../CelText/CelText";
import CelButton from "../CelButton/CelButton";

class CelPayInfoModal extends Component {

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
    const { actions } = this.props
    // const style = CelPayInfoModalStyle()

    return (
      <CelModal
        name={MODALS.CEL_PAY_INFO_MODAL}
      >
        <CelText type="H2" weight="bold" align={"center"} margin={"0 0 20 0"}>Congrats!</CelText>
        <CelText type={"H4"} align={"center"} weight='300' margin={"0 0 20 0"}>All of your contacts have been added to your wallet. Get started with CelPay and transfer crypto between friends faster and easier than ever before.</CelText>

        <CelButton
          onPress={ () => actions.navigateTo('CelPay') }
        >
          Go to CelPay
        </CelButton>
      </CelModal>
    );
  }
}

export default CelPayInfoModal
