import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Campaings } from '../../types/CampaingsTypes';
import { useAxios } from '../../hooks/useAxios';
import axios from 'axios';

export interface CampaingsState {
  campaings: Campaings[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CampaingsState = {
  campaings: [],
  loading: false,
  error: '',
};

export const getAllCampaings = createAsyncThunk('campaings/fetch', async () => {
  try {
    const res = (
      await axios.get(
        'https://getir-api-clone.herokuapp.com/api/kampanyaWithCode',
      )
    ).data as Campaings[];
    console.log('getAllCampaings', res);
    return res;
  } catch (error) {
    return null;
  }
});
export const campaingsSlice = createSlice({
  name: 'campaings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getAllCampaings.fulfilled,
        (state, action: PayloadAction<Campaings[] | null>) => {
          state.campaings = action.payload;
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(
        getAllCampaings.rejected,
        (state, action: PayloadAction<any>) => {
          state.campaings = [];
          state.error = 'error';
          state.loading = false;
        },
      )
      .addCase(getAllCampaings.pending, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = true;
      });
  },
});

export const {} = campaingsSlice.actions;

export default campaingsSlice.reducer;
