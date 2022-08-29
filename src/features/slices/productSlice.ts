import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RouteName, useAxios } from '../../hooks/useAxios';
import { Product, ProductTypes } from '../../types/ProductTypes';

export interface ProductState {
  products: ProductTypes[];
  loadingProduct: boolean;
  error: string | null;
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  products: [],
  loadingProduct: false,
  error: '',
  selectedProduct: null,
};
export const getProduct = createAsyncThunk(
  'product/fetch',
  async (path: RouteName) => {
    try {
      const res = (await useAxios(path)) as ProductState['products'];
      return res;
    } catch (error) {
      console.log('error', error);
      return [];
    }
  },
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        getProduct.fulfilled,
        (state, action: PayloadAction<ProductState['products']>) => {
          state.products = action.payload;
        },
      )
      .addCase(getProduct.rejected, state => {
        state.products = [];
        state.error = "Can't fetch products";
        state.loadingProduct = false;
      })
      .addCase(getProduct.pending, state => {
        state.products = [];
        state.error = null;
        state.loadingProduct = true;
      });
  },
});

export const { selectProduct } = productSlice.actions;

export default productSlice.reducer;
