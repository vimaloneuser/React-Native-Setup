import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import CloseIcon from 'react-native-vector-icons/Octicons';
import Label from '../label';
import { Color } from '../../../utils/color';


const InputText = (props) => {
  return (
    <View style={styles().mainContainer} >
      <View style={styles().container}>
        <Icon name={props.iconname} style={styles().iconStyle} />
        <TextInput
          style={styles().username}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          secureTextEntry={Boolean(props.secureTextEntry)}
          value={props.value}
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}
        />
        {
          props.type == "password" && <CloseIcon
            name={props.secureTextEntry ? "eye-closed" : "eye"}
            size={24}
            color={props.closeColor}
            style={styles().eyeIcon}
            onPress={props.onPress}
          />
        }
      </View>
      {
        props.error && <Label color={Color.ERROR} align="right" normal>
          {props.error}
        </Label>
      }
    </View>
  );
}

export default InputText;
