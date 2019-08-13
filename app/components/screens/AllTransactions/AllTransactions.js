import React, { Component } from 'react';
import { View } from 'react-native';


import AllTransactionsStyle from "./AllTransactions.styles";
import RegularLayout from '../../layouts/RegularLayout/RegularLayout';
import TransactionsHistory from '../../molecules/TransactionsHistory/TransactionsHistory';

class AllTransactions extends Component {
  static propTypes = {};
  static defaultProps = {}

  static navigationOptions = {
    title: 'Transaction history',
    right: 'profile'
  };

  render() {
    const { navigation } = this.props
    const style = AllTransactionsStyle();
    const transactionType = navigation.getParam('transactionType') || null

    return (
      <RegularLayout>
        <View style={style.container}>
          <TransactionsHistory
            filter={ transactionType ? null : false }
            additionalFilter={{ type: transactionType }}
          />
        </View>
      </RegularLayout>
    )
  }
}

export default AllTransactions
