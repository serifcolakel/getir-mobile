import { View } from 'react-native';
import React from 'react';

type Props = {
  cols: number;
  children: React.ReactNode;
};

const Col = ({ cols, children }: Props) => {
  return (
    <View
      style={{
        flex: cols,
      }}>
      {children}
    </View>
  );
};

export default Col;
