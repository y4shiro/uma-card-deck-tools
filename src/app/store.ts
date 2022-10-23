import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cardDeckReducer from '../features/Support/CardDeck/cardDeckSlice';
import filterReducer from '@/features/Support/CardDeck/CardModal/filterSlice';
import modalReducer from '@/features/Support/CardDeck/modalSlice';
import { cardApi } from '@/services/card';

export const store = configureStore({
  reducer: {
    cardDeck: cardDeckReducer,
    modal: modalReducer,
    filter: filterReducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
