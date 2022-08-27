import { Animated, Dimensions, Easing, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getImage } from '../../utils/utils';
import CustomText from './CustomText';
import { color } from 'react-native-reanimated';
import { theme } from '../../utils/theme';

type Props = {};

const SwipeTouch = (props: Props) => {
  const swipeValue = new Animated.Value(0);
  const [show, setShow] = useState(true);
  Animated.loop(
    Animated.sequence([
      Animated.timing(swipeValue, {
        toValue: Dimensions.get('window').width,
        duration: 1500,
        easing: Easing.elastic(3),
        useNativeDriver: true,
      }),
      Animated.timing(swipeValue, {
        toValue: 0,
        duration: 1500,
        easing: Easing.elastic(3),
        useNativeDriver: true,
      }),
    ]),
  ).start();
  const swipe = swipeValue.interpolate({
    inputRange: [0, Dimensions.get('window').width],
    outputRange: [0, Dimensions.get('window').width / 2],
  });
  setTimeout(() => {
    swipeValue.stopAnimation();
    setShow(false);
  }, 5000);
  return (
    <>
      {show && (
        <Animated.View
          style={{
            transform: [{ translateX: swipe }],
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            position: 'absolute',
            zIndex: 1,
            top: '50%',
            left: 0,
          }}>
          <Image
            source={getImage('touch')}
            style={{
              width: 120,
              height: 120,
            }}
          />
          <CustomText
            label="Adres belirlemek için kaydırın"
            style={{ fontSize: 20, color: theme.colors.getirPrimary500 }}
          />
        </Animated.View>
      )}
    </>
  );
};

export default SwipeTouch;

const styles = StyleSheet.create({});
