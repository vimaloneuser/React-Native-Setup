import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../../utils/color';
import styles from './styles';
import Label from '../label';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={this.props.onPress}>
        <LinearGradient
          colors={[Color.PRIMARY, Color.GRADIENT2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <Label bolder large color={Color.WHITE} >{this.props.name}</Label>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
