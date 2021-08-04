import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({onPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.button}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.node.isRequired,
};

Button.defaultProps = {
  onPress: () => {},
};

export default Button;
