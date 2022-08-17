import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/slices/counterSlice';
//import authSlice from "../features/slices/authSlice";
//import languagesSlice from "../features/slices/languagesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import modalSlice from '../features/slices/modalSlice';
// import pdfSlice from '../features/slices/pdfSlice';
// import processSlice from '../features/slices/processSlice';
// import childSlice from '../features/slices/childSlice';
// import riskSlice from '../features/slices/riskSlice';
// import accountSlice from '../features/slices/accountSlice';
// import savingsCalculationSlice from '../features/slices/savingsCalculationSlice';
// import surveySlice from '../features/slices/surveySlice';
export const store = configureStore({
  reducer: {
    // reducers
    counter: counterSlice,
    // modal: modalSlice,
    // pdf: pdfSlice,
    // process: processSlice,
    // child: childSlice,
    // risk: riskSlice,
    // accounts: accountSlice,
    // savingsCalculator: savingsCalculationSlice,
    // survey: surveySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
