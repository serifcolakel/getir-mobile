import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from './PartnerComponents/CustomText';
import { getImage } from '../utils/utils';
import { theme } from '../utils/theme';

type Props = {
  title: string;
  description: string;
  HEADER_HEIGHT: number;
};

const ListEmptyComponent = ({ title, description, HEADER_HEIGHT }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        height: Dimensions.get('window').height - HEADER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        resizeMode="cover"
        source={getImage('favoritesPlaceHolder')}
        style={{
          width: 300,
          height: 250,
        }}
      />
      <CustomText
        label={title}
        style={{
          fontSize: 20,
          paddingBottom: 10,
          color: theme.colors.getirPrimary500,
          textAlign: 'center',
        }}
      />
      <CustomText
        label={description}
        style={{
          textAlign: 'center',
          color: theme.colors.gray,
          fontSize: 14,
        }}
      />
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({});
