import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as appActions from "../../../redux/actions";
import SocialSecurityNumberStyle from "./SocialSecurityNumber.styles";
import CelText from '../../atoms/CelText/CelText';
import CelInput from '../../atoms/CelInput/CelInputText';
import CelButton from '../../atoms/CelButton/CelButton';
import { isUSCitizen } from "../../../utils/user-util";

let focused = 0;

@connect(
  state => ({
    user: state.user.profile,
    formData: state.forms.formData,
    formErrors: state.forms.formErrors
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class SocialSecurityNumber extends Component {

  static propTypes = {
    updatingTaxInfo: PropTypes.bool
  };
  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    const { formData } = this.props;
    if (formData.ssn2 && formData.ssn2.length === 2 && focused < 2) { this.ssn3.focus(); focused = 2 }
    if (formData.ssn1 && formData.ssn1.length === 3 && focused < 1) { this.ssn2.focus(); focused = 1 }
  };

  render() {
    const { formData, formErrors, user, onPress, updatingTaxInfo } = this.props;
    const style = SocialSecurityNumberStyle();
    const ssnArray = user.ssn ? user.ssn.split("-") : {};

    return (
      <View>
        {(isUSCitizen()) ?
          <View>
            <View style={style.ssnInput}>
              <View style={style.inputCel}>
                <CelInput
                  onFocus={this.ssnField}
                  large={false}
                  style={{ flex: 0.5, }}
                  maxLenght={3}
                  keyboardType={'phone-pad'}
                  type={'number'}
                  margin="0 10 0 10"
                  field="ssn1"
                  placeholder="XXX"
                  value={user.ssn ? ssnArray[0] : formData.ssn1}
                  disabled={!!ssnArray[0]}
                  error={formErrors.ssn1}
                  refs={(input) => { this.ssn1 = input }}
                  onSubmitEditing={() => { this.ssn2.focus() }}
                  returnKeyType={"next"}
                />
              </View>
              <CelText style={{ paddingHorizontal: 10, }}>
                {'-'}
              </CelText>
              <View style={style.inputCel}>
                <CelInput
                  large={false}
                  maxLenght={2}
                  style={{ flex: 0.5, justifyContent: 'center' }}
                  keyboardType={'phone-pad'}
                  type={'number'}
                  field="ssn2"
                  placeholder="XX"
                  value={user.ssn ? ssnArray[1] : formData.ssn2}
                  disabled={!!ssnArray[1]}
                  error={formErrors.ssn2}
                  refs={(input) => { this.ssn2 = input }}
                  onSubmitEditing={() => { this.ssn3.focus() }}
                  returnKeyType={"next"}
                />
              </View>
              <CelText style={{ paddingHorizontal: 10, }}>
                {'-'}
              </CelText>
              <View style={style.inputCel}>
                <CelInput
                  large={false}
                  maxLenght={4}
                  style={{ flex: 0.5, justifyContent: 'center' }}
                  keyboardType={'phone-pad'}
                  type={'number'}
                  field="ssn3"
                  placeholder="XXXX"
                  value={user.ssn ? ssnArray[2] : formData.ssn3}
                  disabled={!!ssnArray[2]}
                  error={formErrors.ssn3}
                  refs={(input) => { this.ssn3 = input }}
                />
              </View>
            </View>
            <View style={{ height: 40, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
              <CelText color='red' >{formErrors.ssn}</CelText>
            </View>
            <View style={{ flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', paddingBottom: 20 }}>
            {!user.ssn &&
              <CelButton
                onPress={() => onPress()}
                iconRight={"IconArrowRight"}
                iconRightHeight={"20"}
                iconRightWidth={"20"}
                loading={updatingTaxInfo}
              >
                Submit SSN
              </CelButton>
            }
            </View>
          </View>
          :
          <React.Fragment>
            <View style={style.taxID}>
              <CelInput
                margin="20 0 20 0"
                type="text"
                field="itin"
                placeholder="E-International Tax ID Number (optional)"
                value={user.itin ? user.itin : formData.itin}
                error={formErrors.itin}
                disabled={!!user.itin}
              />
            </View>
            <View style={style.nationalID}>
              <CelInput
                margin="0 0 30 0"
                type="text"
                field="national_id"
                placeholder="E-National ID Number (optional)"
                value={user.national_id ? user.national_id : formData.national_id}
                error={formErrors.national_id}
                disabled={!!user.national_id}
                multiline
                numberOfLines={2}
              />
            </View>
            <View style={{ flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', paddingBottom: 20 }}>
              {(!user.itin && !user.national_id) &&
                <CelButton
                  onPress={() => onPress()}
                  iconRight={"IconArrowRight"}
                  iconRightHeight={"20"}
                  iconRightWidth={"20"}
                  loading={updatingTaxInfo}
                >
                  Submit
                </CelButton>
              }
            </View>
          </React.Fragment>
        }
      </View>
    );
  }
}

export default SocialSecurityNumber
