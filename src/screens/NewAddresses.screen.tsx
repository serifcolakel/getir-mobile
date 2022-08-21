import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import {
  CloseIcon,
  CurrenLocationIcon,
  LoadingIcon,
  LocationIcon,
  SearchIcon,
} from '../components/Icons';
import Input from '../components/PartnerComponents/Input';
import { theme } from '../utils/theme';
import CustomText from '../components/PartnerComponents/CustomText';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { NavigationProps } from '../Layout/StackNavigator';
import GeoLocationRowItem from '../components/GeoLocationRowItem';
import { GOOGLE_MAPS_APIKEY } from '../contants';
import { getGeoLocationFromPlaceId } from '../hooks/getGeoPointFromPlaceId';
import { getSingleDestinationDistance } from '../hooks/useGeoLib';
import { RootState, useAppSelector } from '../store';
import axios from 'axios';
type Props = {
  navigation: NavigationProps;
};
const initialData = [1, 2, 3, 4, 5, 55, 11];
const NewAddresses = ({ navigation }: Props) => {
  const [search, setSearch] = React.useState<string | null>(null);
  const [data, setData] = React.useState<number[] | []>([]);
  const mapRef = useRef<MapView>(null);
  const ref = useRef<GooglePlacesAutocompleteRef>();
  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const coordinates = [
    {
      latitude: 37.79879,
      longitude: -122.442753,
    },
    {
      latitude: 37.790651,
      longitude: -122.422497,
    },
  ];
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };

  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  const [showSpin, setShowSpin] = React.useState(false);
  useEffect(() => {
    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, []);
  const { latitude, longitude } = useAppSelector(
    (state: RootState) => state.user.geoLocation.coords,
  );
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          paddingHorizontal: 10,
        }}>
        <Input
          editable={false}
          onPress={() => {
            console.log('onPress');
          }}
          keyboardType="default"
          textAlign="left"
          placeholder="Mevcut Konumu Kullan"
          leftIcon={<CurrenLocationIcon />}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: Dimensions.get('window').height / 3,
        }}>
        <GooglePlacesAutocomplete
          // @ts-ignore

          ref={ref}
          placeholder="Bir Adres Ara"
          onPress={(data, details = null) => {
            console.log('data', data, 'details', details);
          }}
          fetchDetails={true}
          keyboardShouldPersistTaps="handled"
          minLength={4} // minimum length of text to search
          preProcess={data => {
            // preprocess function will be called before search
            console.log('preProcess', data);
            setSearch(data);
            return data;
          }}
          listEmptyComponent={() => {
            return (
              <CustomText
                style={{ textAlign: 'center', color: theme.colors.red }}
                label={`Aradığınız ${search} konumu ile herhangi bir yer bulamadık. Lütfen tekrar deneyiniz... `}
              />
            );
          }}
          onFail={error => {
            console.log('error', error);
          }}
          renderLeftButton={() => {
            if (search) return <LoadingIcon stopAnimation={!showSpin} />;
            else return <SearchIcon />;
          }}
          keepResultsAfterBlur={true}
          isRowScrollable={false}
          autoFillOnNotFound={true}
          renderRightButton={() => (
            <CloseIcon
              onPress={() => {
                ref.current?.setAddressText('');
                setSearch('');
                ref.current?.clear();
                ref.current?.blur();
                ref.current?.focus();
              }}
            />
          )}
          renderRow={(data, index) => {
            return (
              <GeoLocationRowItem
                data={data}
                showSpin={showSpin}
                onPress={() => {
                  ref.current?.setAddressText(data.description);
                }}
                setShowSpin={setShowSpin}
                key={data.id + index}
              />
            );
          }}
          nearbyPlacesAPI="GoogleReverseGeocoding"
          enablePoweredByContainer={false}
          timeout={1000}
          styles={{
            description: styles.geoDescription,
            separator: styles.geoSeparator,
            container: styles.geoContainer,
            listView: styles.geoListView,
            textInput: styles.geoTextInput,

            textInputContainer: styles.geoTextInputContainer,
            predefinedPlacesDescription: styles.gepPredefinedPlacesDescription,
          }}
          //predefinedPlaces={[homePlace, workPlace]}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'tr',
            type: 'establishment',
          }}
        />
      </View>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          width: '100%',
          height: 300,
        }}
        onPress={e => {
          console.log(e);
        }}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="This is title"
          description="This is description">
          <LocationIcon size={25} />
        </Marker>
        {/* <Marker
          coordinate={coordinates[1]}
          title="This is title"
          description="This is description">
          <LocationIcon />
        </Marker>
        <MapViewDirections
          onReady={result => {
            console.log('onReady', result);
          }}
          //timePrecision="now"
          //geodesic={true}
          //precision="high"
          origin={coordinates[1]}
          destination={coordinates[0]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor={theme.colors.red}
        /> */}
      </MapView>
      {/* <View
        style={{
          padding: 10,
        }}> */}
      {/* <Input
          onChangeText={text => setSearch(text)}
          keyboardType="default"
          textAlign="left"
          placeholder="Adres Ara"
          leftIcon={
            search.length > 5 ? (
              <LoadingIcon stopAnimation={data.length > 0} />
            ) : (
              <SearchIcon />
            )
          }
          rightIcon={
            <CloseIcon
              onPress={() => {
                console.warn('CloseIcon');
              }}
              color={theme.colors.gray4}
            />
          }
        /> */}

      {/* {data.length > 0 && (
          <View>
            {data.map((item, idx) => (
              <Row
                onPress={() => {
                  // if (item.route === 'NewAddresses') {
                  //   navigation.navigate(item.route);
                  // }
                }}
                key={`search-${idx}`}
                extraStyle={{
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                  backgroundColor: theme.colors.white,
                  borderBottomColor: theme.colors.gray3,
                  borderBottomWidth: 1,
                }}
                alignItems="center"
                justifyContent="space-between">
                <Row alignItems="center">
                  <LocationIcon size={30} />
                  <CustomText
                    style={{
                      paddingLeft: 5,
                      paddingRight: 10,
                      width: '75%',
                      color: theme.colors.gray4,
                    }}
                    label={'Hatay, Türkiye Hatay, Türkiye Hatay, Türkiye '}
                  />
                </Row>
                <CustomText
                  style={{
                    fontSize: 12,
                    color: theme.colors.gray4,
                  }}
                  label={'28.5 km'}
                />
              </Row>
            ))}
          </View>
        )} */}
      {/* </View> */}
    </View>
  );
};

export default NewAddresses;

const styles = StyleSheet.create({
  geoDescription: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
  },
  geoSeparator: {
    backgroundColor: theme.colors.getirPrimary300,
    height: 1,
  },
  geoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  geoListView: {
    borderRadius: 10,
    marginTop: 10,
  },
  geoTextInput: {
    textAlignVertical: 'center',
    paddingTop: 10,
    fontFamily: theme.fonts.regular,
  },
  geoTextInputContainer: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.gray4,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gepPredefinedPlacesDescription: {
    color: theme.colors.primary,
  },
});
