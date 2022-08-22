import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getImage } from '../../utils/utils';

type Props = {};

const Search = (props: Props) => {
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      resizeMode="stretch"
      source={getImage('bgDoodle')}
      fadeDuration={200}>
      <View>
        <Text>Search</Text>
      </View>
    </ImageBackground>
  );
};

export default Search;

const styles = StyleSheet.create({});
