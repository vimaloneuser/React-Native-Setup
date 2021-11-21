import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from '../../../utils/color';
import styles from './styles';
import Label from '../label';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles().main_container}
      onPress={props.onPress}>
      <LinearGradient
        colors={[Color.PRIMARY, Color.GRADIENT2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles().button}>
        <Label bolder large color={Color.WHITE} >{props.name}</Label>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default Button