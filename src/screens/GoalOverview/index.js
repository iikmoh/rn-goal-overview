import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import Header from './Header/Header';
import Button from '../../components/Button';
import Summaries from './Summaries';
import Chart from './Chart';
import GeneralSaving from './GeneralSaving/GeneralSaving';

const GoalOverview = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f6f6" />
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={styles.container}>
        <BackButton />
        <Header />
        <Summaries />
        <Chart />
        <GeneralSaving />
      </ScrollView>
      <View style={styles.btnContainer}>
        <Button label="Create Goal" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  btnContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default GoalOverview;
