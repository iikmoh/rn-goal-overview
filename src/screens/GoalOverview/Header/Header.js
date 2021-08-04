import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Goal Overview'}</Text>
      <Text style={styles.subheader}>
        {'Adding this goal will increase your total\nmountly deposit target'}
      </Text>
    </View>
  );
}
