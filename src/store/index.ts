import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterSlice from '../features/slices/counterSlice';
import basketSlice from '../features/slices/basket';
import productSlice from '../features/slices/product';

export const store = configureStore({
  reducer: {
    // reducers
    counter: counterSlice,
    basket: basketSlice,
    allProducts: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
