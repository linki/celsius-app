import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import CheckBox from "react-native-check-box";

import CelText from "../CelText/CelText";
import STYLES from '../../../constants/STYLES';

const CelCheckbox = (props) => {
  const onPress = props.onChange || props.updateFormField

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', marginBottom: 15 }}
      onPress={() => onPress(props.field, !props.value)}
    >
      <CheckBox
        checkBoxColor={STYLES.COLORS.MEDIUM_GRAY}
        checkedCheckBoxColor={STYLES.COLORS.GREEN}
        style={{ paddingRight: 10 }}
        onClick={() => onPress(props.field, !props.value)}
        isChecked={props.value}
        checkedImage={props.checkedImage}
        unCheckedImage={props.unChecked}

      />
      <CelText style={{ marginRight: 30 }}>{props.rightText}</CelText>
    </TouchableOpacity>
  )
}

CelCheckbox.propTypes = {
  field: PropTypes.string.isRequired,
  updateFormField: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  rightText: PropTypes.string,
  checkedImage: PropTypes.element,
  unChecked: PropTypes.element,
}

export default CelCheckbox
