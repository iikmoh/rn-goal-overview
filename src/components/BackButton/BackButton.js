import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import ArrowBack from './ArrowBack';
import PropTypes from 'prop-types';
import styles from './styles';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.button}>
      <View style={styles.button}>
        <ArrowBack fill="#fff" width={17.5} height={17.5} />
      </View>
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func,
};

BackButton.defaultProps = {
  onPress: () => {},
};

export default BackButton;
