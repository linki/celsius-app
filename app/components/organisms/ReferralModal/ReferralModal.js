import React, {Component} from 'react';
import { Text, View, Image, Platform, TouchableOpacity, Clipboard, Share } from "react-native";
import {connect} from 'react-redux';
import Branch from 'react-native-branch';
import {bindActionCreators} from "redux";

import * as appActions from "../../../redux/actions";
import CelModal from "../../atoms/CelModal/CelModal";

import ReferralModalStyle from "./ReferralModal.styles";
import { GLOBAL_STYLE_DEFINITIONS as globalStyles } from "../../../config/constants/style";
import { MODALS } from "../../../config/constants/common";
import CelButton from "../../atoms/CelButton/CelButton";
import Icon from "../../atoms/Icon/Icon";

@connect(
  state => ({
    openedModal: state.ui.openedModal,
    user: state.users.user,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class ReferralModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // initial state
    };
    // binders
  }

  // lifecycle methods
  async componentDidMount() {
    const { user } = this.props;
    try {
      console.log(Branch)
      const branchUniversalObject = await Branch.createBranchUniversalObject(
        `referral:${user.email}`,
        {
          locallyIndex: true,
          title: 'Join Celsius Madafakaaaa!',
          contentDescription: 'HODL this Bitch!'
        }
      )

      console.log({ branchUniversalObject });

      // let linkProperties = {
      //   feature: 'share',
      //   channel: 'facebook'
      // }
      //
      // let controlParams = {
      //   $desktop_url: 'http://desktop-url.com/monster/12345'
      // }

      const { url } = await branchUniversalObject.generateShortUrl()

      console.log({ url })
      this.setState({ url })
    } catch(err) {
      console.log(err);
    }
  }

  // event hanlders
  copyLink = (link) => {
    Clipboard.setString(link);
  };

  // rendering methods
  render() {
    const { actions } = this.props;
    const { url } = this.state;
    return (
      <CelModal name={MODALS.REFERRAL_MODAL}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../../../assets/images/frenchy.png')} style={{ width: 120, height: 120 }} />
        </View>

        <Text style={[globalStyles.largeHeading, { marginTop: 15, marginBottom: 10 }]}>Refer your friends</Text>

        <Text style={[globalStyles.normalText, { textAlign: 'center' }]}>
          Invite your friends to join Celsius with the link below.
        </Text>

        <View style={ReferralModalStyle.box}>
          <View style={ReferralModalStyle.linkWrapper}>
            <Text style={ReferralModalStyle.link}>{ url }</Text>
          </View>

          <View style={ReferralModalStyle.boxButtonsWrapper}>
            <TouchableOpacity
              onPress={() => Share.share({ message: url, title: 'Join Celsius' })}
              style={[ReferralModalStyle.buttons, {
                borderBottomLeftRadius: 8,
                borderRightWidth: 1,
                borderRightColor: "rgba(137,144,153,0.15)"
              }]}
            >
              <View style={ReferralModalStyle.buttonTextWrapper}>
                {Platform.OS === "ios" ? (
                  <Icon
                    style={{ marginTop: 17 }}
                    name='ShareIcon'
                    width='16'
                    height='16'
                    fill='#899099'
                  />
                ) : null}
                <Text style={ReferralModalStyle.buttonsText}>Share</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.copyLink(url)}
              style={[ReferralModalStyle.buttons, {
                borderBottomRightRadius: 8
              }]}
            >
              <View style={ReferralModalStyle.buttonTextWrapper}>
                {Platform.OS === "ios" ? (
                  <Icon
                    style={{ marginTop: 17 }}
                    name='CopyIcon'
                    width='16'
                    height='16'
                    fill='#899099'
                  />
                ) : null}
                <Text style={ReferralModalStyle.buttonsText}>Copy</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <CelButton onPress={() => actions.closeModal()}>Done</CelButton>
      </CelModal>
    );
  }
}

export default ReferralModal;