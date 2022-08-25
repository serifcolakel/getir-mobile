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
export interface LocationState {
  Addresses: Location[];
  selectedAddress: Location | null;
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
    setSelectAddress: (state, action: PayloadAction<Location>) => {
      state.selectedAddress = action.payload;
      state.storeAdress = {
        latitude: action.payload.details.coords.latitude + 0.03,
        longitude: action.payload.details.coords.longitude + 0.03,
      };
    },
    updateSelectedAddress: (state, action: PayloadAction<Location>) => {},
  },
});

export const { setSelectAddress } = adressSlice.actions;

export default adressSlice.reducer;
