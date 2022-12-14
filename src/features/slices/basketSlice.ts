import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/ProductTypes';

export interface BasketState {
  data: Product[];
  totalAmount: number;
  favorites: Product[];
  loading: boolean;
  isActionSuccess?: boolean;
}

const initialState: BasketState = {
  data: [],
  totalAmount: 0,
  favorites: [],
  loading: false,
  isActionSuccess: false,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.data[index].count += 1;
        state.totalAmount += action.payload.price;
      } else {
        state.data.push({ ...action.payload, count: 1 });
        state.totalAmount += action.payload.price;
      }
    },
    deleteToBasket: (state, action: PayloadAction<Product>) => {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1 && state.data[index].count > 1) {
        state.data[index].count -= 1;
        state.totalAmount -= action.payload.price;
      } else if (index !== -1 && state.data[index].count === 1) {
        state.data.splice(index, 1);
        state.totalAmount -= action.payload.price;
      }
      //
      // state.totalAmount = state.data.reduce(
      //   (acc, item) => Number((acc += item.price * item.count).toFixed(3)),
      //   0,
      // );
    },
    handleFavorite: (state, action: PayloadAction<Product>) => {
      const index = state.favorites.findIndex(
        item => item.id === action.payload.id,
      );
      if (index === -1) {
        state.favorites.push({ ...action.payload, count: 1 });
      } else {
        state.favorites.splice(index, 1);
      }
    },

    toggleAction: state => {
      state.isActionSuccess = !state.isActionSuccess;
    },
  },
});

export const { addToBasket, deleteToBasket, toggleAction, handleFavorite } =
  basketSlice.actions;

export default basketSlice.reducer;
