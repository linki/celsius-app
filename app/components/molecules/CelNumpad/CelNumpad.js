import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import testUtil from "../../../utils/test-util";
import CelNumpadStyle from "./CelNumpad.styles";
import CelText from "../../atoms/CelText/CelText";
import { KEYBOARD_TYPE, KEYPAD_PURPOSES, PHONES_WITH_CUSTOM_KEYPAD } from "../../../constants/UI";

const BUTTONS = {
  [KEYPAD_PURPOSES.WITHDRAW]: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', '<'],
  ],
  [KEYPAD_PURPOSES.CELPAY]: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', '<'],
  ],
  [KEYPAD_PURPOSES.VERIFICATION]: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', '<'],
  ],
  [KEYPAD_PURPOSES.AMOUNT]: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', '<'],
  ],
}

const deviceModel = Constants.platform.ios ? Constants.platform.ios.model : Constants.platform.android.model;
const shouldShowCustomKeypad = PHONES_WITH_CUSTOM_KEYPAD.includes(deviceModel)

const KEYBOARDS = {
  [KEYPAD_PURPOSES.WITHDRAW]: KEYBOARD_TYPE.NUMERIC,
  [KEYPAD_PURPOSES.VERIFICATION]: KEYBOARD_TYPE.NUMERIC,
  [KEYPAD_PURPOSES.CELPAY]: KEYBOARD_TYPE.NUMERIC,
  [KEYPAD_PURPOSES.AMOUNT]: KEYBOARD_TYPE.NUMERIC,
}

class CelNumpad extends Component {
  static propTypes = {
    field: PropTypes.string,
    autofocus: PropTypes.bool,
    value: PropTypes.string,
    onPress: PropTypes.func,
    updateFormField: PropTypes.func.isRequired,
    setKeypadInput: PropTypes.func.isRequired,
    toggleKeypad: PropTypes.func.isRequired,
    purpose: PropTypes.string.isRequired,
  }

  static defaultProps = {
    autofocus: true,
  }

  componentDidMount() {
    const { autofocus, toggleKeypad } = this.props;
    if (autofocus) toggleKeypad();
  }


  componentDidUpdate(prevProps) {
    const { isFocused, setKeypadInput } = this.props;
    if (prevProps.isFocused === true && isFocused === false) {
      setKeypadInput(false)
    }
  }

  changeInputText = (text) => {
    const { value, onPress, updateFormField, field } = this.props;

    let newValue;
    if (text.includes('.') && text.includes(',')) {
      newValue = value
    } else {
      newValue = text.replace(',', '.')
    }

    if (onPress) {
      onPress(newValue)
    } else {
      updateFormField(field, newValue)
    }
  }

  pressButton(button) {
    const { updateFormField, onPress, field, value } = this.props;

    let newValue = value;

    if (button === '<') {
      newValue = value.toString().slice(0, -1);

    } else if (button === '.') {
      if (!value.toString().includes('.')) {
        newValue = `${value}${button}`
      } else {
        newValue = value
      }

    } else if (!isNaN(button)) {
      // Number pressed
      if (value) {
        newValue = `${value}${button}`
      } else {
        newValue = button
      }
    }

    if (onPress) {
      onPress(newValue)
    } else {
      updateFormField(field, newValue)
    }
  }

  render() {
    const { purpose, setKeypadInput, value, isFocused } = this.props
    const style = CelNumpadStyle()
    const buttons = BUTTONS[purpose]

    if (!isFocused) return null;

    if (shouldShowCustomKeypad) {
      return (
        <View style={style.container}>

          <View style={style.buttonsWrapper}>
            { buttons.map(btns => (
              <View key={btns[0]} style={style.buttonsRow}>
                { btns.map(btn => (
                  <TouchableOpacity
                    key={btn}
                    style={style.button}
                    onPress={() => this.pressButton(btn)}
                  >
                    <CelText type="H1">{ btn }</CelText>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>
      )
    }

    return (
      <TextInput
        style={{ opacity: 0, position: 'absolute' }}
        value={value || ''}
        onChangeText={this.changeInputText}
        keyboardType={KEYBOARDS[purpose]}
        ref={(input) => setKeypadInput(input)}
      />
    );
  }
}

export default testUtil.hookComponent(withNavigationFocus(CelNumpad));