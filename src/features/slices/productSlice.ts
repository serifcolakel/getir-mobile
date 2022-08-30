import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axiosInstance, { RouteName, useAxios } from '../../hooks/useAxios';
import { Product, ProductTypes } from '../../types/ProductTypes';

export interface ProductState {
  result: Product[];
  products: ProductTypes[];
  loadingProduct: boolean;
  isResultEnd: boolean;
  error: string | null;
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  result: [],
  isResultEnd: false,
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
      return [];
    }
  },
);
type SearchValue = {
  search: string;
  max?: string;
  min?: string;
};
export const getSearchedProduct = createAsyncThunk(
  'product/fetchSearch',
  async (value: SearchValue) => {
    try {
      const res = (
        await axiosInstance.get('searchProduct', {
          params: {
            search: value.search,
            max: value.max,
            min: value.min,
          },
        })
      ).data as ProductState['result'];
      console.log(res);
      return res;
    } catch (error) {
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
          state.loadingProduct = false;
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
    builder
      .addCase(
        getSearchedProduct.fulfilled,
        (state, action: PayloadAction<ProductState['result']>) => {
          state.result = action.payload;
          state.loadingProduct = false;
        },
      )
      .addCase(getSearchedProduct.rejected, state => {
        state.result = [];
        state.error = "Can't fetch products";
        state.loadingProduct = false;
      })
      .addCase(getSearchedProduct.pending, state => {
        state.result = [];
        state.error = null;
        state.loadingProduct = true;
      });
  },
});

export const { selectProduct } = productSlice.actions;

export default productSlice.reducer;
