import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import testUtil from "../../../utils/test-util";

import TransactionsHistoryStyle from "./TransactionsHistory.styles";
import TransactionRow from '../../atoms/TransactionRow/TransactionRow';
import CelText from '../../atoms/CelText/CelText';
import Icon from '../../atoms/Icon/Icon';
import { getMargins } from '../../../utils/styles-util';
import apiUtil from '../../../utils/api-util';
import API from "../../../constants/API";
import LoadingState from "../../atoms/LoadingState/LoadingState";
import EmptyState from "../../atoms/EmptyState/EmptyState";
import * as appActions from "../../../redux/actions";
import transactionsUtil from "../../../utils/transactions-util";

@connect(
  state => ({
    transactions: state.transactions.transactionList,
    currencyRatesShort: state.currencies.currencyRatesShort,
    currencies: state.currencies.rates,
    callsInProgress: state.api.callsInProgress,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class TransactionsHistory extends Component {
  static propTypes = {
    margin: PropTypes.string,
    filterOptions: PropTypes.instanceOf(Array),
    additionalFilter: PropTypes.instanceOf(Object),
    hasFilter: PropTypes.bool,
  };
  static defaultProps = {
    margin: '20 0 20 0',
    filterOptions: [
      { label: 'Withdrawn', value: 'withdraw' },
      { label: 'Received', value: 'received' },
      { label: 'Interest', value: 'interest' },
    ],
    hasFilter: true,
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { actions, additionalFilter } = this.props;
    actions.getAllTransactions(additionalFilter);
  }

  handleFilterChange = (filter) => {
    const { actions, additionalFilter } = this.props;

    actions.getAllTransactions({
      type: filter,
      ...additionalFilter,
    });
    this.setState({ filter })
  }

  prepTransactions() {
    const { filter } = this.state
    const { transactions, additionalFilter, currencyRatesShort } = this.props;

    const transactionsArray = transactionsUtil.filterTransactions(transactions, {
      type: filter,
      ...additionalFilter,
    });

    const transactionsDisplay = transactionsArray.map(t => ({
      id: t.id,
      amount: t.amount,
      amount_usd: t.amount_usd ? t.amount_usd : t.amount * currencyRatesShort[t.coin],
      nature: t.nature,
      interest_coin: t.interest_coin,
      coin: t.coin,
      time: moment(t.time).isSame(moment(), 'day') ? moment(t.time).format('HH:mm') : moment(t.time).format('DD MMM YYYY'),
      status: t.is_confirmed ? t.type : 'pending',
      type: t.type,
      transfer_data: t.transfer_data,
    }));

    return transactionsDisplay;
  }

  render() {
    const { filter } = this.state
    const { actions, margin, filterOptions, callsInProgress, hasFilter } = this.props
    const style = TransactionsHistoryStyle()
    const margins = getMargins(margin)

    let content;
    if (apiUtil.areCallsInProgress([API.GET_ALL_TRANSACTIONS], callsInProgress)) content = <LoadingState />

    const transactionsDisplay = this.prepTransactions()
    if (!transactionsDisplay || !transactionsDisplay.length) content = <EmptyState heading="Sorry" paragraphs={['No transactions in your wallet']} />

    return (
      <View style={[style.container, margins]}>
        <View style={style.filterContainer}>
          <View>
            <CelText bold type='H6'>Transaction history</CelText>
          </View>
          { hasFilter && (
            <RNPickerSelect
              items={filterOptions}
              onValueChange={this.handleFilterChange}
              value={filter || null}
              style={{ height: 16, width: 16 }}
            >
              <View style={{ height: 16, width: 16 }}>
                <Icon name="Filter" width="16" height="16" />
              </View>
            </RNPickerSelect>
          )}
        </View>

        { content || (
          <FlatList
            data={transactionsDisplay}
            renderItem={({ item }) =>
              <TransactionRow
                transaction={item}
                onPress={() => actions.navigateTo('TransactionDetails', { id: item.id })}
              />
            }
            keyExtractor={(item) => item.id}
          />
        )}

      </View>
    );
  }
}

export default testUtil.hookComponent(TransactionsHistory);