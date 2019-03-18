import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Constants } from 'expo';

import testUtil from "../../../utils/test-util";
import * as appActions from "../../../redux/actions";
// import BorrowEnterAmountStyle from "./BorrowEnterAmount.styles";
import CelText from '../../atoms/CelText/CelText';
import CelButton from '../../atoms/CelButton/CelButton';
import RegularLayout from '../../layouts/RegularLayout/RegularLayout';
import CelNumpad from "../../molecules/CelNumpad/CelNumpad";
import ProgressBar from "../../atoms/ProgressBar/ProgressBar";
import { KEYPAD_PURPOSES } from "../../../constants/UI";
import formatter from "../../../utils/formatter";
import STYLES from "../../../constants/STYLES";
import BorrowConfirmModal from "../../organisms/BorrowConfirmModal/BorrowConfirmModal";
import PredefinedAmounts from '../../organisms/PredefinedAmounts/PredefinedAmounts';
import { getPadding } from '../../../utils/styles-util';
import { showMessage } from '../../../redux/ui/uiActions'
import store from '../../../redux/store';

const { MIN_LOAN_AMOUNT } = Constants.manifest.extra;

@connect(
  (state) => ({
    loanCompliance: state.user.compliance.loan,
    formData: state.forms.formData,
    walletSummary: state.wallet.summary,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class BorrowEnterAmount extends Component {
  static propTypes = {};
  static defaultProps = {}

  static navigationOptions = () => ({
    title: "Enter the amount",
    right: "info",
    onInfo: () => { store.dispatch(showMessage('warning', 'Not implemented yet!')) }
  });

  constructor(props) {
    super(props);
    const { loanCompliance, walletSummary } = props
    const eligibleCoins = walletSummary.coins.filter(coinData => loanCompliance.coins.includes(coinData.short))

    this.state = {
      activePeriod: ""
    };

    props.actions.initForm({
      loanAmount: MIN_LOAN_AMOUNT.toString(),
      maxAmount: eligibleCoins.reduce((max, element) => element.amount_usd > max ? element.amount_usd : max, 0) / 2,
    })
  }

  onPressPredefinedAmount = ({ label, value }) => {
    const { formData } = this.props;
    let amount;
    if (value === 'max') amount = formData.maxAmount;
    if (value === 'min') amount = MIN_LOAN_AMOUNT;
    this.handleAmountChange(amount, label);
  }

  getAmountColor = () => {
    const { formData } = this.props;

    if (formData.loanAmount < MIN_LOAN_AMOUNT || formData.loanAmount > formData.maxAmount) {
      return STYLES.COLORS.ORANGE
    }

    return STYLES.COLORS.DARK_GRAY
  }

  handleAmountChange = (newValue, predefined = "") => {
    const { actions, formData } = this.props;

    if (newValue < MIN_LOAN_AMOUNT) {
      actions.showMessage('warning', `$${MIN_LOAN_AMOUNT} is the minimum to proceed.`)
      return;
    }

    if (newValue > formData.maxAmount) {
      actions.showMessage('warning', `${formatter.usd(newValue)} exceeds the maximum amount you can borrow based on your wallet deposits. Deposit more, or change the amount to proceed.`)
      return;
    }

    actions.updateFormField('loanAmount', newValue)
    this.setState({ activePeriod: predefined });
  }

  renderButton() {
    const { formData, actions } = this.props

    if (formData.loanAmount > formData.maxAmount) {
      return (
        <CelButton
          onPress={() => {
            actions.navigateTo('Deposit')
            actions.toggleKeypad()
          }}
          margin="20 0 0 0"
        >
          Deposit more
        </CelButton>
      )
    }

    return (
      <CelButton
        disabled={formData.loanAmount < MIN_LOAN_AMOUNT}
        onPress={() => {
          actions.navigateTo('BorrowCollateral')
          // actions.navigateTo('VerifyProfile', { onSuccess: () => actions.openModal(UI.MODALS.BORROW_CONFIRM)})
          actions.toggleKeypad()
        }}
        margin="20 0 0 0"
        iconRight="arrowRight"
      >
        Choose collateral
      </CelButton>
    )
  }

  render() {
    const { activePeriod } = this.state;
    const { actions, formData } = this.props;
    const predifinedAmount = [
      { label: `$${MIN_LOAN_AMOUNT} min`, value: 'min' },
      { label: `${formatter.usd(formData.maxAmount)} max`, value: 'max' }
    ]
    // const style = BorrowEnterAmountStyle();

    return (
      <RegularLayout padding="0 0 0 0">
        <View style={[{ flex: 1, width: '100%', height: "100%" }, { ...getPadding('20 20 100 20') }]}>
          <View style={{ alignItems: 'center' }}>
            <ProgressBar steps={6} currentStep={1} />
            <CelText align="center" type="H4" margin="30 0 60 0">How much would you like to borrow?</CelText>

            <View style={{ width: '100%' }}>
              <TouchableOpacity onPress={actions.toggleKeypad} style={{ width: '100%' }}>
                <CelText color={this.getAmountColor()} type="H1" align="center">{formatter.usd(formData.loanAmount, { code: '', precision: 0 })}</CelText>
                <View style={{ position: 'absolute', right: 0, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <CelText type="H3">USD</CelText>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <PredefinedAmounts data={predifinedAmount} onSelect={this.onPressPredefinedAmount} activePeriod={activePeriod} />
          {this.renderButton()}

          <CelNumpad
            field={"loanAmount"}
            value={formData.loanAmount}
            updateFormField={actions.updateFormField}
            setKeypadInput={actions.setKeypadInput}
            toggleKeypad={actions.toggleKeypad}
            onPress={this.handleAmountChange}
            purpose={KEYPAD_PURPOSES.AMOUNT}
          />
        </View>
        <BorrowConfirmModal
          formData={formData}
          onConfirm={() => actions.applyForALoan()}
        />
      </RegularLayout >
    );
  }
}

export default testUtil.hookComponent(BorrowEnterAmount);