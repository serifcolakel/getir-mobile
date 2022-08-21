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
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { NavigationProps } from '../Layout/StackNavigator';
import GeoLocationRowItem from '../components/GeoLocationRowItem';
import { GOOGLE_MAPS_APIKEY } from '../contants';
import { getGeoLocationFromPlaceId } from '../hooks/getGeoPointFromPlaceId';
import { getSingleDestinationDistance } from '../hooks/useGeoLib';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import axios from 'axios';
import { addAdresses, getCurrentPosition } from '../features/slices/userSlice';
import { Adresses } from '../types/userSliceTypes';
import { getImage } from '../utils/utils';
import LocationContainer from '../components/PartnerComponents/LocationContainer';
type Props = {
  navigation: NavigationProps;
  route: any;
};

const NewAddresses = ({ navigation, route }: Props) => {
  const [search, setSearch] = React.useState<string | null>(null);

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
  const { adresses } = useAppSelector((state: RootState) => state.user);
  async function Test(data: GooglePlaceData) {
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
            dispatch(getCurrentPosition());
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
            // dispatch(
            //   addAdresses({
            //     data: data,
            //     type: type,
            //   }),
            // );
            //  console.log('DAtaasas', data);
            //navigation.push('SelectAdress', { type });
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
          autoFillOnNotFound={true}
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
            return (
              <GeoLocationRowItem
                data={data}
                showSpin={showSpin}
                onPress={() => {
                  Test(data);
                  //ref.current?.setAddressText(data.description);
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

      {/* 
      {/*
      */}
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
