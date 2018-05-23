import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

// import {STYLES} from "../../config/constants/style";
// import CelInputStyle from "./CelInput.styles";
import {AUTO_CAPITALIZE, KEYBOARD_TYPE} from "../../../config/constants/common";
import TextInput from "./TextInput";
import Icon from "../Icon/Icon";
import PasswordInputStyle from "../PasswordInput/PasswordInput.styles";

class PasswordInput extends Component {
  static propTypes = {
    theme: PropTypes.oneOf(['blue', 'white']),

    // inherited from CelInput
    labelText: PropTypes.string.isRequired,
    floatingLabel: PropTypes.bool,
    // for Input
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    editable: PropTypes.bool,
    maxLength: PropTypes.number,
    secureTextEntry: PropTypes.bool,
    keyboardType: PropTypes.string,
    multiline: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    autoCorrect: PropTypes.bool,
    spellCheck: PropTypes.bool,
  }

  static defaultProps = {
    type: 'text',
    theme: 'blue',
    // inherited from CelInput
    floatingLabel: true,
    // for Input
    value: '',
    placeholder: '',
    editable: true,
    maxLength: 100,
    keyboardType: KEYBOARD_TYPE.DEFAULT,
    multiline: false,
    autoCapitalize: AUTO_CAPITALIZE.NONE,
    autoCorrect: false,
    spellCheck: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }
  }

  // rendering methods
  render() {
    const { visible } = this.state;
    const { theme } = this.props;

    return (
      <View>
        <TextInput {...this.props} secureTextEntry={!visible} />
        <TouchableOpacity onPress={ () => this.setState({ visible: !visible })} style={visible ? PasswordInputStyle.eyeHide : PasswordInputStyle.eyeShow}>
          <Icon
            name={ visible ? 'EyeHide' : 'EyeShow' }
            height='30'
            width='30'
            viewBox={ visible ? "0 0 35 24" : '0 0 35 24' }
            fill={ theme === 'secondary' ? 'black' : 'white' }
            stroke={ theme === 'secondary' ? 'black' : 'white' }
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default PasswordInput;
