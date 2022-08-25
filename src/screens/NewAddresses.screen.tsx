import { StyleSheet, View, Dimensions, Image } from 'react-native';
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
  GooglePlaceData,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import { NavigationProps } from '../Layout/StackNavigator';
import GeoLocationRowItem from '../components/GeoLocationRowItem';
import { GOOGLE_MAPS_APIKEY } from '../contants';
import { getGeoLocationFromPlaceId } from '../hooks/getGeoPointFromPlaceId';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { getGeoLocation } from '../features/slices/locationSlice';
type Props = {
  navigation: NavigationProps;
  route: any;
};

const NewAddresses = ({ navigation, route }: Props) => {
  const [search, setSearch] = React.useState<string | null>(null);
  const { selectedAddress } = useAppSelector(
    (state: RootState) => state.location,
  );
  const ref = useRef<GooglePlacesAutocompleteRef>();
  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

  const { type } = route.params;
  const dispatch = useAppDispatch();

  const [showSpin, setShowSpin] = React.useState(false);
  async function handleSelectAddress(data: GooglePlaceData) {
    const geoLocation = await getGeoLocationFromPlaceId(data.place_id);
    console.log('onPress', data.description, geoLocation);
  }
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
            dispatch(getGeoLocation());
            navigation.push('SelectAdress', { type });
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
          height: Dimensions.get('window').height - 200,
        }}>
        <GooglePlacesAutocomplete
          // @ts-ignore
          ref={ref}
          placeholder="Bir Adres Ara"
          onPress={(data, details = null) => {
            //  console.log('DAtaasas', data);
          }}
          fetchDetails={true}
          keyboardShouldPersistTaps="handled"
          minLength={4} // minimum length of text to search
          preProcess={data => {
            // preprocess function will be called before search
            // console.log('preProcess', data);
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
          renderRightButton={() => (
            <CloseIcon
              onPress={() => {
                ref.current?.setAddressText('');
                setSearch('');
                ref.current?.clear();
                ref.current?.blur();
                //ref.current?.focus();
              }}
            />
          )}
          renderRow={(data, index) => {
            async function handleSelectAddress(data: GooglePlaceData) {
              const geoLocation = await getGeoLocationFromPlaceId(
                data.place_id,
              );
              console.log('onPress', data.description, geoLocation);
              // dispatch(
              //   selectAdress({
              //     details: { data: data, type: type },
              //     location: geoLocation,
              //   }),
              // );
              navigation.push('SelectAdress', { type });
            }
            return (
              <GeoLocationRowItem
                data={data}
                showSpin={showSpin}
                onPress={() => {
                  //ref.current?.setAddressText(data.description);
                  handleSelectAddress(data);
                  console.log('onPress', data.description);
                  // dispatch(
                  //   addAdress({
                  //     data: data,
                  //     type: type,
                  //   }),
                  // );
                  // handleSelectAddress(data);
                  //
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
            row: {
              padding: 0,
            },
            textInputContainer: styles.geoTextInputContainer,
            predefinedPlacesDescription: styles.gepPredefinedPlacesDescription,
          }}
          //predefinedPlaces={adresses}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'tr',
            type: 'establishment',
          }}
        />
      </View>
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
    marginBottom: 4,
  },
  geoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  geoListView: {
    height: 500,
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
