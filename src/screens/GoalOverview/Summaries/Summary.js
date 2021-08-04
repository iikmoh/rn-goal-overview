/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Chip from '../../../components/Chip';
import PropTypes from 'prop-types';
import {currency} from '../../../utils/formater';
import styles from './styles';

const Summary = ({label, amount, light, right}) => {
  return (
    <View
      style={[
        styles.summary,
        ...(right ? [styles.right] : [styles.left]),
        {backgroundColor: light ? '#fff' : '#ebeff3'},
      ]}>
      <View style={styles.chip}>
        <Chip label={label} light={!light} />
      </View>
      <Text style={styles.description}>{'Total\nMonthly Deposit'}</Text>
      <Text
        style={[
          styles.amount,
          {color: light ? '#333' : '#828282'},
        ]}>{`RM${currency(amount)}/mo`}</Text>
    </View>
  );
};

Summary.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  light: PropTypes.bool,
  right: PropTypes.bool,
};

Summary.defaultProps = {
  light: false,
  right: false,
};

export default Summary;
