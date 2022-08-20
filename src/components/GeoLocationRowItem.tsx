import { StyleSheet } from 'react-native';
import React from 'react';
import Row from './Row';
import { theme } from '../utils/theme';
import { LocationIcon } from './Icons';
import CustomText from './PartnerComponents/CustomText';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';

type Props = {
  onPress: () => void;
  data: GooglePlaceData;
};

const GeoLocationRowItem = ({ onPress, data }: Props) => {
  return (
    <Row
      onPress={onPress}
      extraStyle={styles.container}
      alignItems="center"
      justifyContent="space-between">
      <Row alignItems="center">
        <LocationIcon size={30} />
        <CustomText style={styles.description} label={data.description} />
      </Row>
      <CustomText style={styles.distance} label={'28.5 km'} />
    </Row>
  );
};

export default GeoLocationRowItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.gray3,
  },
  description: {
    paddingLeft: 5,
    paddingRight: 10,
    width: '75%',
    color: theme.colors.gray4,
  },
  distance: {
    fontSize: 12,
    color: theme.colors.gray4,
  },
});
