import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import testUtil from "../../../utils/test-util";
import CelText from "../../atoms/CelText/CelText";
import Card from "../../atoms/Card/Card";
import formatter from "../../../utils/formatter";
import Icon from "../../atoms/Icon/Icon";
import Graph from "../../graphs/Graph/Graph";

import STYLES from "../../../constants/STYLES";
import { heightPercentageToDP, widthPercentageToDP } from '../../../utils/styles-util';

class CoinCard extends Component {
  static propTypes = {
    coin: PropTypes.instanceOf(Object).isRequired,
    displayName: PropTypes.string.isRequired,
    currencyRates: PropTypes.instanceOf(Object).isRequired,
    onCardPress: PropTypes.func,
    graphData: PropTypes.instanceOf(Object)
  };

  coinCardEmpty = () => (
    <View>
      <CelText weight='600' type="H3" bold margin='3 0 3 0'>{formatter.usd(0)}</CelText>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Icon fill={STYLES.COLORS.CELSIUS_BLUE} width="13" height="13" name="CirclePlus" />
        <CelText margin={'0 0 0 5'} color={STYLES.COLORS.CELSIUS_BLUE}>
          Deposit
      </CelText>
      </View>
    </View>
  )

  coinCardFull = (coin) => (
    <Fragment>
      <CelText weight='600' type="H3" bold margin='3 0 3 0'>{formatter.usd(coin.amount_usd)}</CelText>
      <CelText weight='300' type="H6">{formatter.crypto(coin.amount, coin.short)}</CelText>
    </Fragment>
  )

  renderPriceChange = (currencyRates) => {
    const coinPriceChange = currencyRates.price_change_usd['1d']
    const textColor = coinPriceChange < 0 ? STYLES.COLORS.RED : STYLES.COLORS.GREEN
    const arrowType = coinPriceChange < 0 ? "DownArrow" : "UpArrow"

    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Icon name={arrowType} fill={textColor} height={6} width={6}/>
        <CelText weight='500' type="H7" color={textColor} margin='0 0 0 3'>{coinPriceChange ? Math.abs(coinPriceChange) : 0} %</CelText>
      </View>
    )
  }

  render = () => {
    const { coin, displayName, currencyRates, onCardPress, graphData } = this.props;
    const amount = coin.amount_usd > 0;
    let dateArray;
    let priceArray;

    const coinPriceChange = currencyRates.price_change_usd['1d']
    if (graphData) {
      dateArray = graphData["1d"].map(data => data[0]);
      priceArray = graphData["1d"].map(data => data[1]);

    }

    const padding = graphData ? '12 12 0 12' : '12 12 12 12';

    // Todo(ns): adjust graph size according to Card size prop

    return (
      <Card style={{ flexDirection: 'row', flexWrap: 'wrap' }} size="half" margin="5 0 5 0" padding={padding} onPress={onCardPress}>
        <View style={{ flexDirection: "row"}}>
          <View>
            <CelText weight='300' type="H6">{displayName}</CelText>
            {amount ? this.coinCardFull(coin) : this.coinCardEmpty(coin, currencyRates)}
          </View>
          <View style={{ position: 'absolute', right: 0 }} >
            {this.renderPriceChange(currencyRates)}
          </View>
        </View>
        {graphData ?
          <View style={{ alignItems: "center" }}>
            <Graph key={coin.short} dateArray={dateArray} priceArray={priceArray}
              rate={coinPriceChange}
              height={heightPercentageToDP("10%")}
              width={widthPercentageToDP("41%")}
              style={{borderBottomRightRadius: 8, borderBottomLeftRadius: 8, overflow: 'hidden'}}
            />
          </View>
          : null}
      </Card>
    )
  }
}

export default testUtil.hookComponent(CoinCard);
