import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { getAddressDetailsFromGeoLocatin } from '../../hooks/getGeoPointFromPlaceId';
export interface Location {
  type: 'home' | 'work' | 'other';
  details: {
    formatted_address: string;
    place_id: string;
    coords: {
      latitude: number;
      longitude: number;
    };
  };
}
type AvaragaDeliveryDetails = {
  distance: number;
  duration: number;
};
export interface LocationState {
  Addresses: Location[];
  selectedAddress: Location | null;
  averageDeliveryDetails: AvaragaDeliveryDetails;
  storeAdress: {
    latitude: number;
    longitude: number;
  };
}

const initialState: LocationState = {
  Addresses: [],
  selectedAddress: null,
  storeAdress: {
    latitude: 0,
    longitude: 0,
  },
  averageDeliveryDetails: {
    distance: 0,
    duration: 10,
  },
};
export const getGeoLocation = createAsyncThunk(
  'geoLocation',
  async (_, { dispatch }) => {
    try {
      Geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;
        await getAddressDetailsFromGeoLocatin(
          position.coords.latitude,
          position.coords.longitude,
        ).then(res => {
          res?.formatted_address;
          if (res?.formatted_address) {
            dispatch(
              setSelectAddress({
                details: {
                  coords: {
                    latitude,
                    longitude,
                  },
                  formatted_address: res?.formatted_address,
                  place_id: res?.place_id,
                },
                type: 'home',
              }),
            );
          }
        });
      });
    } catch (error) {
      return initialState.Addresses;
    }
  },
);
export const adressSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSelectAddress: (state, action: PayloadAction<Location | null>) => {
      state.selectedAddress = action.payload;
    },
    updateAverageDeliveryDetails: (
      state,
      action: PayloadAction<AvaragaDeliveryDetails>,
    ) => {
      state.averageDeliveryDetails = action.payload;
    },
  },
});

export const { setSelectAddress, updateAverageDeliveryDetails } =
  adressSlice.actions;

export default adressSlice.reducer;
