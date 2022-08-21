import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Geolocation, {
  GeoError,
  GeoPosition,
} from 'react-native-geolocation-service';
import { Adresses, SelectedAdress, User } from '../../types/userSliceTypes';

export interface UserState {
  user: User | null;
  geoLocation: GeoPosition;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  adresses: Adresses[];
  selectedAdress: SelectedAdress | null;
}

const initialState: UserState = {
  user: {
    id: '',
    name: '',
    token: '',
  },
  selectedAdress: null,
  adresses: [],
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
};
export const getCurrentPosition = createAsyncThunk(
  'position',
  async (e, { dispatch }) => {
    try {
      Geolocation.getCurrentPosition(
        async position => {
          dispatch(setGeoLocation(position));
          return position;
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
    selectAdress: (state, action: PayloadAction<SelectedAdress>) => {
      state.selectedAdress = action.payload;
    },
    addAdresses: (state, action: PayloadAction<Adresses>) => {
      state.adresses.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        getCurrentPosition.fulfilled,
        (state, action: PayloadAction<any>) => {},
      )
      .addCase(getCurrentPosition.rejected, state => {
        state.isError = true;
        state.errorMessage = 'Position Error';
      })
      .addCase(getCurrentPosition.pending, state => {
        state.isLoading = true;
      });
  },
});

export const { setGeoLocation, addAdresses, selectAdress } = userSlice.actions;

export default userSlice.reducer;
