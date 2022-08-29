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
  categories: Categories[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: null,
  loading: false,
  error: '',
};
export const getAllCategories = createAsyncThunk('category/fetch', async () => {
  try {
    const res = (await useAxios('categories')) as Categories[];
    return res;
  } catch (error) {
    return null;
  }
});

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getAllCategories.fulfilled,
        (state, action: PayloadAction<Categories[] | null>) => {
          state.categories = action.payload;
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(getAllCategories.rejected, state => {
        state.categories = [];
        state.error = 'error';
        state.loading = false;
      })
      .addCase(getAllCategories.pending, state => {
        state.error = '';
        state.loading = true;
      });
  },
});

export default categoriesSlice.reducer;
