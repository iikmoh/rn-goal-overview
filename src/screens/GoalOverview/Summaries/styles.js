import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  summary: {
    paddingTop: 30,
    paddingBottom: 12.5,
    paddingHorizontal: 17.5,
    flex: 1,
  },
  left: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  right: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  chip: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#828282',
    fontFamily: 'SFUIDisplay-Bold',
  },
  amount: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'SFUIDisplay-Bold',
  },
});

export default styles;
