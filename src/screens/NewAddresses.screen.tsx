import {
  StyleSheet,
  View,
  Platform,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
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
import Row from '../components/Row';
import CustomText from '../components/PartnerComponents/CustomText';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationProps } from '../Layout/StackNavigator';
import GeoLocationRowItem from '../components/GeoLocationRowItem';
type Props = {
  navigation: NavigationProps;
};
const initialData = [1, 2, 3, 4, 5, 55, 11];
const NewAddresses = ({ navigation }: Props) => {
  const [search, setSearch] = React.useState('');
  const [data, setData] = React.useState<number[] | []>([]);

  const ref = useRef<GooglePlacesAutocompleteRef>();
  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  const [showSpin, setShowSpin] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          padding: 10,
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
          placeholder="Search124124"
          onPress={(data, details = null) => {
            console.log('data', data, 'details', details);
          }}
          fetchDetails={true}
          keyboardShouldPersistTaps="handled"
          minLength={2} // minimum length of text to search
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
            if (search.length > 2) return <LoadingIcon stopAnimation={false} />;
            else return <SearchIcon />;
          }}
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
            console.log('renderRow', data);
            return (
              <GeoLocationRowItem
                data={data}
                onPress={() => {
                  ref.current?.setAddressText(data.description);
                }}
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
          predefinedPlaces={[homePlace, workPlace]}
          query={{
            key: 'AIzaSyAk1VUyA3QjvvCsixKUwFr9ptSXFNNfzms',
            language: 'tr',
          }}
        />
      </View>
      {/* <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          width: '100%',
          height: 300,
        }}
        onPress={e => {
          console.log(e);
        }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="This is title"
          description="This is description">
          <LocationIcon />
        </Marker>
      </MapView> */}
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
    padding: 10,
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
