import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
    marginVertical: 7.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#f6f6f6',
    borderRadius: 12.5,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#868686',
    marginBottom: 4,
    fontFamily: 'SFUIDisplay-Bold',
  },
  amount: {
    fontSize: 15,
    color: '#393939',
    fontFamily: 'SFUIDisplay-Bold',
  },
});

export default styles;
