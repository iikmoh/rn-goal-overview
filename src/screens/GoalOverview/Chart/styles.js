import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 7.5,
  },
  chart: {
    borderRadius: 10,
    marginTop: 20,
  },
  tooltip: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#005785',
    position: 'absolute',
  },
  tooltipArrow: {
    height: 0,
    width: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#005785',
    position: 'absolute',
    left: 22,
    bottom: -10,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 8,
    fontFamily: 'SFUIDisplay-Bold',
  },
});

export default styles;
