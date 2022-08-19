import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';
import { theme } from '../../utils/theme';

type Props = {
  label?: string;
  style?: StyleProp<TextStyle>;
};

const CustomText = ({ label, style }: Props) => {
  return (
    <Text
      style={[
        {
          fontFamily: theme.fonts.regular,
        },
        style,
      ]}>
      {label}
    </Text>
  );
};

export default CustomText;
