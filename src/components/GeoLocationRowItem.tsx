import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Row from './Row';
import { theme } from '../utils/theme';
import { LoadingIcon, LocationIcon } from './Icons';
import CustomText from './PartnerComponents/CustomText';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';
import { getGeoLocationFromPlaceId } from '../hooks/getGeoPointFromPlaceId';
import { RootState, useAppSelector } from '../store';
import { getSingleDestinationDistance } from '../hooks/useGeoLib';

type Props = {
  onPress: () => void;
  data: GooglePlaceData;
  setShowSpin: (showSpin: boolean) => void;
  showSpin: boolean;
};

const GeoLocationRowItem = ({
  onPress,
  data,
  setShowSpin,
  showSpin,
}: Props) => {
  const { latitude, longitude } = useAppSelector(
    (state: RootState) => state.user.geoLocation.coords,
  );
  let { place_id } = data;

  const [distance, setDistance] = React.useState<string | null>(null);
  async function getGeoLocation() {
    const geoLocation = await getGeoLocationFromPlaceId(place_id);

    const distance = await getSingleDestinationDistance({
      start: { lat: latitude, lng: longitude },
      end: { lat: geoLocation.lat, lng: geoLocation.lng },
    });
    setDistance(distance);
    setShowSpin(false);
  }
  useEffect(() => {
    getGeoLocation();
  }, [place_id]);
  return (
    <Row
      onPress={onPress}
      extraStyle={styles.container}
      alignItems="center"
      justifyContent="space-between">
      <Row
        onPress={onPress}
        alignItems="center"
        extraStyle={{
          width: '82%',
        }}>
        <LocationIcon size={24} />
        <CustomText style={styles.description} label={data.description} />
      </Row>
      {distance ? (
        <CustomText style={styles.distance} label={`${distance} km`} />
      ) : (
        <LoadingIcon stopAnimation={!showSpin} size={25} />
      )}
    </Row>
  );
};

export default GeoLocationRowItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    paddingLeft: 5,
    paddingVertical: 5,
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.gray3,
  },
  description: {
    paddingLeft: 10,
    paddingRight: 40,
    color: theme.colors.gray4,
  },
  distance: {
    textAlign: 'left',
    fontSize: 12,
    color: theme.colors.gray4,
  },
});
