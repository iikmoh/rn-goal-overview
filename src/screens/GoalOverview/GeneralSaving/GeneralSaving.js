import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Plant from '../../../assets/svg/Plant';
import {currency} from '../../../utils/formater';
import styles from './styles';

export default function GeneralSaving() {
  const [amount] = useState(500);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Plant width={30} height={30} fill="#2d2d2d" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>General Saving</Text>
        <Text style={styles.amount}>{`RM${currency(amount)}/mo`}</Text>
      </View>
    </View>
  );
}
