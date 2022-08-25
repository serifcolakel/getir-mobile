import React, { useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

type SkeletonProps = {
  width: number | string;
  height: number;
  variant: 'rect' | 'circle';
  rounded?: number;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant,
  rounded,
}) => {
  let borderRadius = 0;
  if (variant === 'circle') {
    borderRadius = height / 2;
  } else if (rounded) {
    borderRadius = rounded;
  }
  const opacity = useRef(new Animated.Value(0.3)).current;
  //const scale = useRef(new Animated.Value(0.3)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        // Animated.timing(scale, {
        //   toValue: 1,
        //   duration: 500,
        //   useNativeDriver: true,
        // }),

        Animated.timing(opacity, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: true,
        }),

        // Animated.timing(scale, {
        //   toValue: 0.3,
        //   duration: 500,
        //   useNativeDriver: true,
        // }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.8,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  return (
    <Animated.View
      style={[
        {
          opacity,
          width,
          height,
          marginVertical: 2.5,
          borderRadius,
          //transform: [{ scale }],
        },
        styles.skeleton,
      ]}
    />
  );
};

export default Skeleton;
const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: theme.colors.getirPrimary200,
  },
});
