import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RouteName, useAxios } from '../../hooks/useAxios';
export interface Product {
  id: string;
  name: string;
  shortName: string;
  shortDescription: string;
  squareThumbnailURL: string;
  picURLs: string[];
  categoryIds: string[];
  subCategoryIds: string[];
  displayType: number;
  price: number;
  priceText: string;
  count: number;
  struckPrice: number;
  struckPriceText: string;
  isFavorite: boolean;
  infoMessages: any[];
  currency: Currency;
  additionalPropertyTables: any[];
  tags: any[];
  slug: string;
  badgeImages: any[];
  details: Details;
}

export interface Currency {
  symbol: string;
  codeAlpha: string;
  isSymbolFirst: boolean;
}

export interface Details {
  additionalPropertyTables: any[];
}
// interface Product {
//   id: string;
//   price: number;
//   name: string;
//   count: number;
//   shortDescription: string;
//   squareThumbnailURL: string;
// }
export interface ProductState {
  products: {
    id: string;
    name: string;
    slug: string;
    productCount?: number;
    data: Product[];
  }[];

  loadingProduct: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loadingProduct: false,
  error: '',
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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getProduct.fulfilled,
        (state, action: PayloadAction<ProductState['products']>) => {
          console.log('getProductaction', action.payload);
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

export default productSlice.reducer;
