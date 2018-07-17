import React, {Component} from 'react';
import { Text } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as appActions from "../../../redux/actions";
import SimpleLayout from "../../layouts/SimpleLayout/SimpleLayout";
import {GLOBAL_STYLE_DEFINITIONS as globalStyles, STYLES} from "../../../config/constants/style";
import { CAMERA_COPY } from "../../../config/constants/common";
import CelSelect from "../../molecules/CelSelect/CelSelect";
import Separator from "../../atoms/Separator/Separator";
import CelButton from "../../atoms/CelButton/CelButton";
import CameraInput from "../../atoms/CameraInput/CameraInput";
import CelPhoneInput from "../../molecules/CelPhoneInput/CelPhoneInput";
import CelForm from "../../atoms/CelForm/CelForm";

import apiUtil from "../../../utils/api-util";
import API from "../../../config/constants/API";

@connect(
  state => ({
    formData: state.ui.formData,
    user: state.users.user,
    kycDocuments: state.users.kycDocuments,
    callsInProgress: state.api.callsInProgress,
    lastCompletedCall: state.api.lastCompletedCall,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class VerifyProfile extends Component {
  // lifecycle methods
  componentDidMount() {
    const { actions } = this.props;

    actions.getKYCDocuments();
    this.initForm();
  }

  componentDidUpdate(prevProps) {
    const { kycDocuments } = this.props;

    if (kycDocuments && !prevProps.kycDocuments) {
      this.initForm();
    }
  }

  // event hanlders
  validateForm = () => {
    const { formData, actions } = this.props;

    if (!formData.documentType) return actions.showMessage('error', 'Document Type is required!');
    if (!formData.front) return actions.showMessage('error', 'Front side photo is required!');
    if (!formData.back && formData.documentType !== 'passport') return actions.showMessage('error', 'Back side photo is required!');
    if (!formData.cellphone) return actions.showMessage('error', 'Cell phone is required!');

    return true;
  }

  submitForm = () => {
    const { actions } = this.props;
    const isFormValid = this.validateForm();

    if (isFormValid === true) {
      actions.verifyKYCDocs();
    }
  }

  initForm = () => {
    const { actions, user, kycDocuments } = this.props;
    actions.initForm({
      cellphone: user.cellphone,
      documentType: kycDocuments ? kycDocuments.type : undefined,
      front: kycDocuments ? kycDocuments.front : undefined,
      back: kycDocuments ? kycDocuments.back : undefined,
    })
  }
  // rendering methods
  render() {
    const { formData, callsInProgress } = this.props;

    const isLoading = apiUtil.areCallsInProgress([API.UPDATE_USER_PERSONAL_INFO], callsInProgress);

    return (
      <SimpleLayout
        animatedHeading={{ text: 'Verify Profile'}}
        background={STYLES.PRIMARY_BLUE}
        bottomNavigation={false}
      >
        <Text style={[globalStyles.normalText, { color: 'white' }]}>
          Please take a photo of your ID or passport to confirm your identity.
        </Text>

        <CelForm margin="30 0 35 0" disabled={isLoading}>
          <CelSelect field="documentType" type="document" labelText="Document Type" value={formData.documentType}/>

          <Separator margin="15 0 15 0">TAKE PHOTOS</Separator>

          <CameraInput mask="document" labelTextActive="Front side of the document" labelTextInactive="Front side photo" value={formData.front} field="front" cameraCopy={CAMERA_COPY.DOCUMENT} />
          { formData.documentType !== 'passport' ? (
            <CameraInput mask="document" labelTextActive="Back side of the document" labelTextInactive="Back side photo" value={formData.back} field="back" cameraCopy={CAMERA_COPY.DOCUMENT} />
          ) : null }

          <Separator margin="20 0 15 0">PHONE</Separator>

          <CelPhoneInput labelText="Phone Number" field="cellphone" value={formData.cellphone} />
        </CelForm>

        <CelButton
          onPress={this.submitForm}
          iconRight="IconArrowRight"
          loading={isLoading}
          disabled={isLoading}
          white
          margin="0 0 60 0"
        >
          Verify phone number
        </CelButton>
      </SimpleLayout>
    );
  }
}

export default VerifyProfile;
