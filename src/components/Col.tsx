import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  cols: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Col = ({ cols, children, style }: Props) => {
  return (
    <View
      style={[
        {
          flex: cols,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Col;
