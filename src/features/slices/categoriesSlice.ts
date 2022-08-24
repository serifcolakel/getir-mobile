import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RouteName, useAxios } from '../../hooks/useAxios';
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
  path: RouteName;
}
export interface CategoriesState {
  data: Categories[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  data: null,
  loading: false,
  error: '',
};
export const getAllCategories = createAsyncThunk('product/fetch', async () => {
  try {
    const res = (await useAxios('categories')) as Categories[];
    console.log('categories', res);
    return res;
  } catch (error) {
    console.log('error', error);
    return null;
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
        (state, action: PayloadAction<Categories[] | null>) => {
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
