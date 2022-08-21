import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { theme } from '../../utils/theme';

type Props = {
  onPress: () => void;
  title: string;
  color?: string;
  disabled?: boolean;
  type?: 'outlined' | 'contained';
  extraStyle?: StyleProp<ViewStyle>;
  height?: number;
};

const Button = ({
  onPress,
  title,
  color = theme.colors.getirPrimary500,
  disabled = false,
  type = 'contained',
  extraStyle = {},
  height = 44,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          ...styles.button,
          height: height,
          borderColor: disabled ? theme.colors.white : color,
          backgroundColor: disabled
            ? theme.colors.white
            : type === 'outlined'
            ? 'transparent'
            : color,
        },
        extraStyle,
      ]}>
      <CustomText
        label={title}
        style={{
          ...styles.buttonText,
          color: disabled
            ? theme.colors.gray2
            : type === 'outlined'
            ? theme.colors.lightBlue
            : theme.colors.gray3,
          fontFamily: theme.fonts.bold,
        }}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 6,
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,

    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});
