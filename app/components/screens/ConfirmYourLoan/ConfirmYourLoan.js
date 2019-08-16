import React, { Component } from 'react';
import { View, Image } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { countries } from "country-data";


import * as appActions from "../../../redux/actions";
import ConfirmYourLoanStyle from "./ConfirmYourLoan.styles";
import CelText from '../../atoms/CelText/CelText';
import RegularLayout from '../../layouts/RegularLayout/RegularLayout';
import HeadingProgressBar from '../../atoms/HeadingProgressBar/HeadingProgressBar'
import formatter from "../../../utils/formatter";
import CelButton from "../../atoms/CelButton/CelButton";
import Separator from "../../atoms/Separator/Separator";
import Card from "../../atoms/Card/Card";
import STYLES from "../../../constants/STYLES";
import { LOAN_TYPES } from '../../../constants/DATA';
import LoanApplicationSuccessModal from '../../organisms/LoanApplicationSuccessModal/LoanApplicationSuccessModal';

// TODO rename to BorrowLoanConfirm
@connect(
  state => ({
    formData: state.forms.formData,
    currencyRates: state.currencies.currencyRatesShort,
    bankAccountInfo: state.user.bankAccountInfo,
    loanInfo: state.loans.loanInfo
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class ConfirmYourLoan extends Component {
  static propTypes = {};
  static defaultProps = {}

  static navigationOptions = () => ({
    title: "Confirm Your Loan",
    right: "profile"
  });

  componentDidMount () {
    const { formData, actions, currencyRates } = this.props
    // actions.getLinkedBankAccount()
    const crypto = currencyRates[formData.coin.toLowerCase()]
    const loanAmount = parseFloat(formData.loanAmount)
    let totalPayment = 0
    if (formData.loanType === LOAN_TYPES.STABLE_COIN_LOAN){
      totalPayment = loanAmount * crypto + formData.monthlyPayment * formData.termOfLoan
    } else {
      totalPayment = loanAmount + (formData.monthlyPayment * formData.termOfLoan)
    }
    actions.updateFormField( 'totalPaymentInUsd', totalPayment )
  }

  showCountry(countryName){
    const style = ConfirmYourLoanStyle();
    let iso
    let country
    Object.keys(countries).forEach((key) => {
      if(countries[key].name === countryName){
        country = countries[key]
        iso = country.alpha2
      }
    });
    if (iso) return (
      <View style={{flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
        <Image
          source={{ uri: `https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/${iso.toLowerCase()}.png` }}
          resizeMode="cover"
          style={style.flagImage}
        />
         <CelText type="H3" weight="600" margin={'0 0 0 5'}>{ country.name }</CelText>
      </View>
    )
  }


  requestButtonHandle = () => {
    const { actions } = this.props

    // actions.applyForALoan(formData)
    actions.navigateTo('LoanTermsOfUse')
  }

  renderBankInfo = () => {
    const { formData } = this.props
    const { loan } = this.props.loanInfo
    if( formData.loanType === LOAN_TYPES.USD_LOAN ) {
      return (
        <Card>
          <CelText type="H6" weight="300">Bank Name</CelText>
          <CelText type="H3" weight="600" margin={'0 0 15 0'}>{ loan.bank_name }</CelText>

          <CelText type="H6" weight="300">Bank Address</CelText>
          <CelText type="H3" weight="600" margin={'0 0 15 0'}>{ loan.bank_address }</CelText>

          <CelText type="H6" weight="300">Bank ZIP / Postal Code</CelText>
          <CelText type="H3" weight="600" margin={'0 0 15 0'}>{ loan.bank_zip }</CelText>

          <CelText type="H6" weight="300">Bank City</CelText>
          <CelText type="H3" weight="600" margin={'0 0 15 0'}>{ loan.bank_city }</CelText>

          <CelText type="H6" weight="300" margin={'0 0 3 0'}>Bank Country</CelText>
          { this.showCountry(loan.bank_country) }

          { this.renderBankAccountInfo() }

        </Card>
      )
    }
  }

  renderBankAccountInfo = () => {
    const { bankInfo } = this.props.formData
    const { loan } = this.props.loanInfo
    if ( bankInfo && bankInfo.location === 'United States') {
      return (
        <View>
          <CelText type="H6" weight="300">ABA (routing number)</CelText>
          <CelText type="H3" weight="600" margin={'0 0 15 0'}>{ loan.bank_swift }</CelText>

          <CelText type="H6" weight="300">Your Account Number</CelText>
          <CelText type="H3" weight="600" margin={'0 0 15 0'}>{ loan.bank_account_number }</CelText>
        </View>
      )
    }
    return (
      <View>
        <CelText type="H6" weight="300">SWIFT (Bank Identifier Code)</CelText>
        <CelText type="H3" weight="600" margin={'0 0 15 0'}>{ loan.bank_swift }</CelText>

        <CelText type="H6" weight="300">Your Account Number</CelText>
        <CelText type="H3" weight="600" margin={'0 0 15 0'}>{ loan.bank_account_number }</CelText>
      </View>

    )
  }


  renderAmount = () => {
    const { loan } = this.props.loanInfo

    if (loan.type === LOAN_TYPES.STABLE_COIN_LOAN){
      return (
        <CelText align="center" type="H1" weight="bold">{ formatter.crypto(loan.loan_amount, loan.loan_coin, { precision: 2 }) }</CelText>
      )
    }
    return(
      <CelText align="center" type="H1" weight="bold">{ formatter.usd(loan.loan_amount, { precision: 0 }) }</CelText>
    )
  }

  render() {
    const { loan } = this.props.loanInfo
    const style = ConfirmYourLoanStyle();

    return (
      <View flex={1}>
        <HeadingProgressBar steps={6} currentStep={6} />
        <RegularLayout
          fabType={'hide'}
        >
          <View>
            <CelText align="center">You are about to borrow</CelText>
            {this.renderAmount()}
            <Card>
              <CelText type="H6" weight="300" align="center">Estimated Collateral</CelText>
              <CelText type="H3" weight="700" align="center" margin= '5 0 10 0'>{ formatter.crypto(loan.estimated_collateral, loan.estimated_collateral_coin) }</CelText>
                <Card color={style.grayCard.color}>
                  <CelText type="H6" weight="300">The exact amount of collateral needed will be determined upon approval. Coins used for collateral will be locked and ineligible to earn interest.</CelText>
                </Card>
            </Card>

            <Card>
              <View style={style.horizontalCardContainer}>
                <View style={style.horizontalCardItem}>
                  <CelText type="H6" weight="300" align="center">Term Length</CelText>
                  <CelText type="H3" weight="600" align="center">{ loan.term_of_loan } months</CelText>
                </View>

                <View style={style.separatorContainer}>
                  <Separator vertical height={'60%'}/>
                </View>

                <View style={style.horizontalCardItem}>
                  <CelText type="H6" weight="300" align="center">Annual Interest Rate</CelText>
                  <CelText type="H3" weight="600" align="center">{ formatter.percentage(loan.annual_interest_rate) }%</CelText>
                </View>
              </View>
            </Card>

            <Card>
              <View style={style.horizontalCardContainer}>
                <View style={style.horizontalCardItem}>
                  <CelText type="H6" weight="300" align="center">Monthly Interest</CelText>
                  <CelText type="H3" weight="600" align="center">{ formatter.usd(loan.monthly_payment) }</CelText>
                </View>

                <View style={style.separatorContainer}>
                  <Separator vertical height={'60%'}/>
                </View>

                <View style={style.horizontalCardItem}>
                  <CelText type="H6" weight="300" align="center">Total Interest</CelText>
                  <CelText type="H3" weight="600" align="center">{ formatter.usd(loan.monthly_payment * loan.term_of_loan )}</CelText>
                </View>
              </View>
            </Card>

            <Card>
              <CelText type="H6" weight="300" align="center">Total of Payments</CelText>
              <CelText type="H3" weight="600" align="center">{ formatter.usd(loan.total_payments) }</CelText>
              <CelText type="H6" weight="300" align="center">(Amount Borrowes + Total Interest)</CelText>

              <Separator margin={'10 0 10 0'}/>

              <CelText type="H6" weight="300" align="center">Number of Payments</CelText>
              <CelText type="H3" weight="600" align="center">{ loan.term_of_loan }</CelText>
            </Card>

            <Card color={style.blueCard.color}>
              <CelText type="H6" weight="300" align="center" color={style.blueCardText.color}>Reduce your interest rate by</CelText>
              <CelText type="H3" weight="600" align="center" color={style.blueCardBoldText.color}>{ formatter.percentage(loan.CEL_discount) } %</CelText>
              <CelText type="H6" weight="300" align="center" color={style.blueCardText.color}>
                By paying out in
                <CelText type="H5" weight="300" align="center" color={style.blueCardBoldText.color}> CEL</CelText>
              </CelText>

              <Separator margin={'10 0 10 0'} color={style.blueCardText.color}/>

              <View style={style.horizontalCardContainer}>
                <View style={style.horizontalCardItem}>
                  <CelText type="H6" weight="300" align="center" color={style.blueCardText.color}> Monthly Interest</CelText>
                  <CelText type="H3" weight="600" align="center" color={style.blueCardBoldText.color}>{ formatter.crypto(loan.CEL_monthly_interest, 'CEL', {precision: 2}) }</CelText>
                </View>

                <View style={style.separatorContainer}>
                  <Separator vertical height={'60%'}/>
                </View>

                <View style={style.horizontalCardItem}>
                  <CelText type="H6" weight="300" align="center" color={style.blueCardText.color}>Total Interest</CelText>
                  <CelText type="H3" weight="600" align="center" color={style.blueCardBoldText.color}>{ formatter.crypto(loan.CEL_total_interest, 'CEL', {precision: 2}) }</CelText>
                </View>
              </View>

              <Card noBorder color={STYLES.COLORS.WHITE_OPACITY1}>
                <View style={style.horizontalCardContainer}>
                  <View style={style.horizontalCardItem}>
                    <CelText type="H6" weight="300" align="center" color={style.blueCardText.color}> Original Monthly Interest</CelText>
                    <CelText type="H3" weight="600" align="center" color={style.blueCardBoldText.color} strikethrough>{ formatter.usd(loan.CEL_original_monthly_interest) }</CelText>
                  </View>

                  <View style={style.separatorContainer}>
                    <Separator vertical height={'60%'} color={style.blueCardText.color}/>
                  </View>

                  <View style={style.horizontalCardItem}>
                    <CelText type="H6" weight="300" align="center" color={style.blueCardText.color}>Discounted Monthly Interest</CelText>
                    <CelText type="H3" weight="600" align="center" color={style.blueCardBoldText.color}>{ formatter.usd(loan.CEL_discounted_monthly_interest )}</CelText>
                  </View>
                </View>
              </Card>

              <Card noBorder color={STYLES.COLORS.WHITE_OPACITY1}>
                <View style={style.horizontalCardContainer}>
                  <View style={style.horizontalCardItem}>
                    <CelText type="H6" weight="300" align="center" color={style.blueCardText.color}> Original Total Interest</CelText>
                    <CelText type="H3" weight="600" align="center" color={style.blueCardBoldText.color} strikethrough>{ formatter.usd( loan.CEL_original_total_interest) }</CelText>
                  </View>

                  <View style={style.separatorContainer}>
                    <Separator vertical height={'60%'} color={style.blueCardText.color}/>
                  </View>

                  <View style={style.horizontalCardItem}>
                    <CelText type="H6" weight="300" align="center" color={style.blueCardText.color}>Discounted Total Interest</CelText>
                    <CelText type="H3" weight="600" align="center" color={style.blueCardBoldText.color}>{ formatter.usd(loan.CEL_discounted_total_interest)}</CelText>
                  </View>
                </View>
              </Card>

              <CelText type="H6" weight="300" italic align="center" margin=' 0 0 5 0' color={style.blueCardText.color}> This rate is subject to change based on your loyalty level and CEL price at the time of payment.</CelText>
            </Card>

           { this.renderBankInfo() }

            <Card>
              <CelText type="H6" weight="300" align="center">{loan.margin_call.collateral_coin}
                <CelText type="H6" weight="300" align="center"> margin call</CelText>
              </CelText>
              <CelText type="H3" weight="700" align="center" margin= '5 0 10 0'>{ loan.margin_call.margin_call_amount }</CelText>
                <Card color={style.grayCard.color}>
                  <CelText type="H6" weight="300">If BTC drops bellow $XXX, you will receive a notification to review your borrowing options.</CelText>
                </Card>
            </Card>

            <Card>
              <CelText type="H6" weight="300" align="center">Liquidation at</CelText>
              <CelText type="H3" weight="700" align="center" margin= '5 0 10 0'>{ formatter.usd(loan.liquidation_call_price) }</CelText>
                <Card color={style.grayCard.color}>
                  <CelText type="H6" weight="300">If BTC drops below $xxx we will sell some of your collateral to cover the margin.</CelText>
                </Card>
            </Card>

            <CelButton onPress={ this.requestButtonHandle } margin="22 0 0 0">Request loan</CelButton>
          </View>
        </RegularLayout>
        <LoanApplicationSuccessModal />
      </View>

    );
  }
}

export default ConfirmYourLoan
