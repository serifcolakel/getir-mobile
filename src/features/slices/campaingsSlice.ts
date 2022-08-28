import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Campaings } from '../../types/CampaingsTypes';
import { useAxios } from '../../hooks/useAxios';

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

export const getAllCampaings = createAsyncThunk('product/fetch', async () => {
  try {
    const res = (await useAxios('kampanyaWithCode')) as Campaings[];
    return res;
  } catch (error) {
    return null;
  }
});
export const campaingsSlice = createSlice({
  name: 'counter',
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
