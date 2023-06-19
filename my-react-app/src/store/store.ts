import { configureStore } from '@reduxjs/toolkit';
import formSlice from './reducer/formSlice';
import searchSlice from './reducer/searchSlice';
import { cardApi, charactersReducer } from './api/api';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    formReducer: formSlice,
    searchReducer: searchSlice,
    cardApi: charactersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
