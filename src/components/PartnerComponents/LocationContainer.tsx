import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { getImage } from '../../utils/utils';
import { theme } from '../../utils/theme';
type Props = {
  imageType: string;
};
const LocationContainer = ({ imageType }: Props) => {
  return (
    <View style={styles.LocationContainer}>
      <View style={styles.LocationContainerTop} />
      <View style={styles.LocationContainerBottom} />
      <Image
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          bottom: 35,
          borderRadius: 50,
        }}
        source={getImage(imageType)}
      />
    </View>
  );
};
export default LocationContainer;
const styles = StyleSheet.create({
  LocationContainer: {
    width: 100,
    height: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LocationContainerTop: {
    width: 100,
    height: 0,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderLeftWidth: 25,
    borderRightColor: 'transparent',
    borderRightWidth: 25,
    borderBottomColor: theme.colors.getirPrimary400,
    borderBottomWidth: 25,
  },
  LocationContainerBottom: {
    width: 0,
    height: 0,
    borderTopWidth: 70,
    borderTopColor: theme.colors.getirPrimary400,
    borderLeftColor: 'transparent',
    borderLeftWidth: 50,
    borderRightColor: 'transparent',
    borderRightWidth: 50,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
});
