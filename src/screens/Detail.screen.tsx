import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getImage } from '../utils/utils';

type Props = {};

const Detail = (props: Props) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="stretch"
      source={getImage('bgDoodle')}
      fadeDuration={200}>
      <View>
        <Text>Detail</Text>
      </View>
    </ImageBackground>
  );
};

export default Detail;

const styles = StyleSheet.create({});
