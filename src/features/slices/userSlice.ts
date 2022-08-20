import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Geolocation, {
  GeoCoordinates,
  GeoError,
  GeoPosition,
} from 'react-native-geolocation-service';
import { RootState } from '../../store';

export type User = {
  id: string;
  name: string;
  token: string;
};
export interface UserState {
  user: User | null;
  geoLocation: GeoPosition;
  geoLocationError: GeoError | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  user: {
    id: '',
    name: '',
    token: '',
  },
  isLoading: false,
  isError: false,
  errorMessage: '',
  geoLocation: {
    timestamp: 0,
    mocked: false,
    provider: 'network',
    coords: {
      speed: 0,
      heading: 0,
      altitude: 0,
      accuracy: 0,
      longitude: 0,
      altitudeAccuracy: 0,
      latitude: 0,
    },
  },
  geoLocationError: null,
};
export const getCurrentPosition = createAsyncThunk(
  'position',
  async (e, { dispatch }) => {
    try {
      Geolocation.getCurrentPosition(
        async position => {
          dispatch(setGeoLocation(position));
        },
        error => {
          return error;
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    } catch (error) {
      console.log('error', error);
      return initialState.geoLocation;
    }
  },
);
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGeoLocation: (state, action: PayloadAction<GeoPosition>) => {
      state.geoLocation = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        getCurrentPosition.fulfilled,
        (state, action: PayloadAction<any>) => {
          console.log('getCurrentPosition.fulfilled', action.payload);
        },
      )
      .addCase(getCurrentPosition.rejected, state => {
        console.log('getCurrentPosition.rejected');
        state.isError = true;
        state.errorMessage = 'Position Error';
      })
      .addCase(getCurrentPosition.pending, state => {
        console.log('getCurrentPosition.pending');
        state.isLoading = true;
      });
  },
});

export const { setGeoLocation } = userSlice.actions;

export default userSlice.reducer;
