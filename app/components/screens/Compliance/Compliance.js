import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appActions from "../../../redux/actions";
import ComplianceStyle from "./Compliance.styles";
import { GLOBAL_STYLE_DEFINITIONS as globalStyle } from "../../../config/constants/style";
import CelInput from "../../atoms/CelInput/CelInput";
import formater from "../../../utils/formatter";


@connect(
  state => ({
    connected: state.ui.internetConnected,
    walletTotal: state.wallet.total,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class Compliance extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // initial state
    };
    // binders
  }

  // lifecycle methods
  componentDidMount = async () => {
    const {actions} = this.props;
    await actions.getWalletDetails();
  };


  // event handlers
  // rendering methods
  render() {
    const {walletTotal} = this.props;
    return (
      <View style={ComplianceStyle.background}>
        { walletTotal &&
        <View style={{ marginTop: 15, width: 200 }}>
          <CelInput field={"currentWalletBalance"} shadow theme="white" value={formater.usd(walletTotal.quotes.USD.total)}
                    labelText="Current wallet balance:" autoCapitalize="sentences"/>
        </View>
        }
        <Image source={require("../../../../assets/images/OfflineMode/deer-tangled3x.png")} style={[ComplianceStyle.image, {resizeMode: "contain"}]}/>
        <Text style={[globalStyle.heading, ComplianceStyle.header]}>Celsius Network is unavailable due to local compliance laws</Text>
        <Text style={[globalStyle.normalText, ComplianceStyle.explanation]}>Your money is safe with us and earning interest as usual. For additional information, please contact our support.</Text>
      </View>
    );
  }
}

export default Compliance;
