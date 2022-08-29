import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import LocationContainer from '../components/PartnerComponents/LocationContainer';
import { NavigationProps } from '../Layout/StackNavigator';
import { CurrenLocationIcon, InfoIcon, LoadingIcon } from '../components/Icons';
import { getAddressDetailsFromGeoLocatin } from '../hooks/getGeoPointFromPlaceId';
import CustomText from '../components/PartnerComponents/CustomText';
import { theme } from '../utils/theme';
import Button from '../components/PartnerComponents/Button';
import {
  getGeoLocation,
  setSelectAddress,
  updateAverageDeliveryDetails,
} from '../features/slices/locationSlice';
import { GOOGLE_MAPS_APIKEY } from '../contants';
import MapViewDirections from 'react-native-maps-directions';
import Row from '../components/Row';
import { getImage } from '../utils/utils';
import SwipeTouch from '../components/PartnerComponents/SwipeTouch';

type Props = {
  navigation: NavigationProps;
  route: any;
};

const SelectAdress = ({ navigation, route }: Props) => {
  const { type } = route.params;
  const mapRef = useRef<MapView>(null);
  const { selectedAddress, averageDeliveryDetails } = useAppSelector(
    (state: RootState) => state.location,
  );

  const origin = {
    latitude: selectedAddress?.details?.coords.latitude || 0,
    longitude: selectedAddress?.details?.coords.longitude || 0,
  };
  const destination = {
    latitude: 41.01384,
    longitude: 28.94966,
  };
  async function setCameraPositin() {
    await mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }
  useEffect(() => {
    setCameraPositin();
  }, []);
  useEffect(() => {
    setCameraPositin();
  }, [selectedAddress]);
  const dispatch = useAppDispatch();
  const [currentAdressTextVisible, setCurrentAdressTextVisible] =
    React.useState(false);
  function handleSelectAddress() {
    setCurrentAdressTextVisible(false);
    mapRef.current?.getCamera().then(async data => {
      const { latitude, longitude } = data.center;
      await getAddressDetailsFromGeoLocatin(latitude, longitude).then(data => {
        if (data) {
          dispatch(
            setSelectAddress({
              details: {
                coords: {
                  latitude,
                  longitude,
                },
                formatted_address: data?.formatted_address,
                place_id: data?.place_id,
              },
              type,
            }),
          );
        }
      });
      await mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    });
  }
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
      }}>
      {averageDeliveryDetails.distance > 3 && (
        <Row
          extraStyle={{
            position: 'absolute',
            bottom: 120,
            left: 5,
            alignContent: 'center',
            justifyContent: 'center',
            width: '75%',
            alignSelf: 'center',
            backgroundColor: '#fff',
            paddingVertical: 2,
            paddingHorizontal: 5,
            zIndex: 1,
            borderRadius: 5,
          }}>
          <View
            style={{
              paddingVertical: 6,
              paddingRight: 5,
            }}>
            <InfoIcon size={30} />
          </View>
          <CustomText
            style={{
              fontSize: 12,
              width: '80%',

              paddingLeft: 5,
              color: theme.colors.getirPrimary500,
            }}
            label={`Size En Yakın Mağazamıza ${
              averageDeliveryDetails.distance
            } km uzaklıkta olup varış süresi tahmini ${(
              averageDeliveryDetails.duration / 60
            ).toFixed(2)} saat sürmektedir.`}
          />
        </Row>
      )}
      <SwipeTouch />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          dispatch(getGeoLocation());
        }}
        style={{
          position: 'absolute',
          bottom: 120,
          right: 20,
          height: 50,
          zIndex: 1,
          width: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <CurrenLocationIcon
          onPress={() => {
            dispatch(getGeoLocation());
          }}
          size={40}
        />
      </TouchableOpacity>
      <MapView
        onMapReady={() => {}}
        //onTouchMove={() => }
        onTouchStart={() => {
          setCurrentAdressTextVisible(true);
        }}
        onTouchEnd={() => handleSelectAddress()}
        ref={mapRef}
        mapType={'standard'}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          width: '100%',
          height: '85%',
        }}
        // camera={{
        //   center: {
        //     latitude: getirBranchAddresses[0].lat,
        //     longitude: getirBranchAddresses[0].lng,
        //   },
        //   zoom: 15,
        //   pitch: 0,
        //   heading: 0,
        // }}
        onPress={e => {
          console.log(e);
        }}
        initialRegion={{
          latitude: origin.latitude ? origin.latitude : 41.01384,
          longitude: origin.longitude ? origin.longitude : 28.94966,

          latitudeDelta: 0.0922,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          identifier={'destination'}
          coordinate={{ ...destination }}
          title="Getir"
          description={`Size En Yakın Mağazamız`}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LocationContainer imageType={'getirStore'} />
          </View>
        </Marker>

        <Marker
          coordinate={{
            latitude: origin.latitude ? origin.latitude : 41.01384,
            longitude: origin.longitude ? origin.longitude : 28.94966,
          }}
          identifier={'origin'}
          title="Buradasınız"
          description={`${type} tipi için seçmek istediğiniz adres`}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {selectedAddress && (
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
                    textAlign: 'center',
                    color: theme.colors.getirPrimary500,
                  }}
                  label={selectedAddress?.details.formatted_address}
                />
              </View>
            )}
            <LocationContainer imageType={type} />
            {currentAdressTextVisible && (
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
                }}
              />
            )}
          </View>
        </Marker>

        {/*
        <Marker
          coordinate={coordinates[1]}
          title="This is title"
          description="This is description">
          <LocationIcon />
        </Marker>
        */}
        <MapViewDirections
          onReady={result => {
            dispatch(
              updateAverageDeliveryDetails({
                distance: result.distance,
                duration: result.duration,
              }),
            );
            console.log('onReady', result);
          }}
          timePrecision="now"
          geodesic={true}
          optimizeWaypoints={true}
          precision="high"
          origin={{
            latitude: origin.latitude ? origin.latitude : 41.01384,
            longitude: origin.longitude ? origin.longitude : 28.94966,
          }}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor={theme.colors.getirPrimary500}
        />
      </MapView>
      <View
        style={{
          padding: 20,
        }}>
        <Button
          onPress={() => navigation.navigate('Route')}
          title="Bu Adresle Devam Et"
        />
      </View>
    </View>
  );
};

export default SelectAdress;

const styles = StyleSheet.create({});
