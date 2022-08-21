import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RootState, useAppSelector } from '../store';
import LocationContainer from '../components/PartnerComponents/LocationContainer';
import { NavigationProps } from '../Layout/StackNavigator';
import { CurrenLocationIcon } from '../components/Icons';
import { getAddressDetailsFromGeoLocatin } from '../hooks/getGeoPointFromPlaceId';
import CustomText from '../components/PartnerComponents/CustomText';
import { theme } from '../utils/theme';
import Button from '../components/PartnerComponents/Button';

type Props = {
  navigation: NavigationProps;
  route: any;
};

const SelectAdress = ({ navigation, route }: Props) => {
  const { type } = route.params;
  const mapRef = useRef<MapView>(null);
  useEffect(() => {
    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, []);
  const { latitude, longitude } = useAppSelector(
    (state: RootState) => state.user.geoLocation.coords,
  );
  const [cameraCenter, setCameraCenter] = React.useState<LatLng>({
    latitude,
    longitude,
  });
  const [address, setAddress] = React.useState<string | null>(null);
  async function getData() {
    await mapRef.current?.getCamera().then(data => {
      console.log(data.center);
      setCameraCenter(data.center);
    });
    await getAddressDetailsFromGeoLocatin(
      cameraCenter.latitude,
      cameraCenter.longitude,
    ).then(data => {
      console.log(data);
      setAddress(data);
    });
  }
  const { adresses } = useAppSelector((state: RootState) => state.user);
  const [position, setPosition] = React.useState<boolean>(false);
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={{
          position: 'absolute',
          bottom: 150,
          right: 20,
          height: 50,
          zIndex: 1,
          width: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <CurrenLocationIcon size={40} />
      </TouchableOpacity>
      <MapView
        //onTouchMove={() => }
        mapType="terrain"
        onTouchStart={() => setPosition(true)}
        onTouchEnd={e => {
          getData();
          setPosition(false);
        }}
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          width: '100%',
          height: '85%',
        }}
        camera={{
          center: {
            latitude: latitude,
            longitude: longitude,
          },
          zoom: 15,
          pitch: 0,
          heading: 0,
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
        {/* <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="Buradasınız"
          description={`${type} tipi için seçmek istediğiniz adres`}>
          <LocationContainer imageType={type} />
        </Marker> */}
        {cameraCenter && (
          <Marker
            coordinate={{
              latitude: cameraCenter?.latitude,
              longitude: cameraCenter?.longitude,
            }}
            title="Buradasınız"
            description={`${type} tipi için seçmek istediğiniz adres`}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {address && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    backgroundColor: '#fff',
                    paddingVertical: 2,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                  }}>
                  <CustomText
                    style={{
                      fontSize: 12,
                      color: theme.colors.getirPrimary500,
                    }}
                    label={address}
                  />
                </View>
              )}
              <LocationContainer imageType={type} />
              {position && (
                <View
                  style={{
                    borderWidth: 2,
                    width: 15,
                    height: 15,
                    transform: [{ rotateX: '45deg' }, { rotateZ: '45deg' }],
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderColor: '#f0f',
                  }}></View>
              )}
            </View>
          </Marker>
        )}
        {/*
        <Marker
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
        />  */}
      </MapView>
      <View
        style={{
          padding: 20,
        }}>
        <Button
          onPress={() => navigation.navigate('Addresses')}
          title="Bu Adresle Devam Et"
        />
      </View>
    </View>
  );
};

export default SelectAdress;

const styles = StyleSheet.create({});
