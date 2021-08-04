/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Chip = ({label, light}) => {
  return (
    <View
      style={[styles.chip, {backgroundColor: light ? '#e1e7ee' : '#3989ca'}]}>
      <Text style={[styles.label, {color: light ? '#5e5f61' : '#fff'}]}>
        {label}
      </Text>
    </View>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  light: PropTypes.bool,
};

Chip.defaultProps = {
  light: false,
};

export default Chip;
