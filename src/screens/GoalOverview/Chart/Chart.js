import React, {useState} from 'react';
import {View, Dimensions, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {currency} from '../../../utils/formater';
import {chartConfig} from './constans';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

function Chart() {
  const [data] = useState([0, 90000, 200000]);

  const Tooltip = ({x, y, value}) => {
    return (
      <View style={[styles.tooltip, {marginTop: x - 100, marginLeft: y + 30}]}>
        <View style={styles.tooltipArrow} />
        <Text style={styles.tooltipText}>{`RM${currency(value)}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ['', 'Today', '', '2040'],
          datasets: [
            {
              data,
            },
          ],
        }}
        chartConfig={chartConfig}
        renderDotContent={({x, y, index, indexData}) => (
          <Tooltip x={x} y={y} value={indexData} key={index} />
        )}
        height={200}
        width={screenWidth - 40}
        hidePointsAtIndex={[0, 2]}
        withVerticalLines={false}
        style={styles.chart}
        formatYLabel={value => (value > 1000 ? value / 1000 + 'k' : '')}
        bezier
        useShadowColorFromDataset={true}
      />
    </View>
  );
}

export default Chart;
