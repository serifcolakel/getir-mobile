import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useFetch } from '../../hooks/useFetch';
export interface Categories {
  id: string;
  name: string;
  picURL: string;
  order: number;
  productCount: number;
  subCategories: SubCategory[];
  slug: string;
}

export interface SubCategory {
  id: string;
  name: string;
  productCount: number;
  slug: string;
}
export interface CategoriesState {
  data: Categories[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  data: [],
  loading: false,
  error: '',
};
export const getAllCategories = createAsyncThunk('product/fetch', async () => {
  try {
    const res = (await useFetch('categories')) as Categories[];
    return res;
  } catch (error) {
    console.log('error', error);
    return [];
  }
});

export const categoriesSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getAllCategories.fulfilled,
        (state, action: PayloadAction<Categories[]>) => {
          console.log('PayloadActionaction', action.payload);
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(
        getAllCategories.rejected,
        (state, action: PayloadAction<any>) => {
          state.data = [];
          state.error = 'error';
          state.loading = false;
        },
      )
      .addCase(
        getAllCategories.pending,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload;
          state.loading = true;
        },
      );
  },
});

export default categoriesSlice.reducer;
