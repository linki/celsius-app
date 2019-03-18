import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import testUtil from "../../../utils/test-util";

import SimpleSelect from '../SimpleSelect/SimpleSelect';
import CelText from '../../atoms/CelText/CelText';
import CircleButton from '../../atoms/CircleButton/CircleButton';

class CoinPicker extends Component {

  static propTypes = {
    coinList: PropTypes.instanceOf(Array).isRequired,
    updateFormField: PropTypes.func.isRequired,
    field: PropTypes.string.isRequired,
    value: PropTypes.string,
    onCoinSelect: PropTypes.func,
    defaultSelected: PropTypes.string,
  };

  static defaultProps = {
    onCoinSelect: () => {},
    value: '',
    defaultSelected: ''
  };

  componentDidMount() {
    const { updateFormField, field, onCoinSelect, defaultSelected } = this.props;

    if (defaultSelected) {
      onCoinSelect(field, defaultSelected);
      updateFormField(field, defaultSelected);
    }
  }

  render() {
    const { coinList, value, onCoinSelect } = this.props;

    return (
      <View>
        <CelText type="H4">Choose coin to deposit</CelText>

        <CircleButton
          style={{marginBottom: 10, marginTop: 10}}
          type="coin"
          icon={`Icon${value}`}
        />

        <SimpleSelect
          items={coinList}
          field='selectedCoin'
          displayValue={value}
          onChange={(field, item) => onCoinSelect(field, item)}
          style={{justifyContent: 'center'}}
        />
      </View>
    );
  }
}

export default testUtil.hookComponent(CoinPicker);