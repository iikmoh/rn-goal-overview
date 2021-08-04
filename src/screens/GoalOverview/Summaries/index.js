import React from 'react';
import {View, StyleSheet} from 'react-native';
import Summary from './Summary';

const Summaries = () => {
  return (
    <View style={styles.container}>
      <Summary label="Current" amount={1.75} />
      <Summary label="New" amount={2.25} light right />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 7.5,
  },
});

export default Summaries;
