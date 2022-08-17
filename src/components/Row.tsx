import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  extraStyle?: StyleProp<ViewStyle>;

  onPress?: () => void;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

const Row = ({
  children,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  extraStyle = {},
  onPress,
}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={onPress ? 0.8 : 1}
    style={[
      extraStyle,
      {
        flexDirection: 'row',
        alignItems,
        justifyContent,
      },
    ]}>
    {children}
  </TouchableOpacity>
);

export default Row;
