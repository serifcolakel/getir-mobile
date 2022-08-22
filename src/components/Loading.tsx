import React from 'react';
import { Animated, Dimensions, Easing, Image, Modal, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../utils/theme';
import { getImage } from '../utils/utils';

export const Loading: React.FC = ({}) => {
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      //easing: Easing.inOut(Easing.ease),
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Modal animationType="fade" transparent={true}>
      <View
        style={{
          flex: 1,
          position: 'relative',
          backgroundColor: theme.colors.getirPrimary200,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            position: 'absolute',
            width: 80,
            height: 80,
            borderRadius: 25,
          }}
          source={getImage('getirLogo')}
        />
        <Animated.View
          style={{
            transform: [{ rotate: spin }],
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Svg
            width={250}
            height={250}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024">
            <Path
              fill={theme.colors.getirPrimary500}
              d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
            />
          </Svg>
        </Animated.View>
      </View>
    </Modal>
  );
};
