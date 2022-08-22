import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useFetch } from '../../hooks/useFetch';
interface Product {
  id: string;
  price: number;
  name: string;
  count: number;
  shortDescription: string;
  squareThumbnailURL: string;
}
export interface ProductState {
  data: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: [],
  loading: false,
  error: '',
};
export const getAllProduct = createAsyncThunk('product/fetch', async () => {
  try {
    const res = (await useFetch('urunler')) as Product[];
    return res;
  } catch (error) {
    console.log('error', error);
    return [];
  }
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getAllProduct.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        },
      )
      .addCase(getAllProduct.rejected, (state, action: PayloadAction<any>) => {
        state.data = [];
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getAllProduct.pending, (state, action: PayloadAction<any>) => {
        state.data = [];
        state.error = action.payload;
        state.loading = true;
      });
  },
});

export default productSlice.reducer;
