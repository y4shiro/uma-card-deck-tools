import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cardDeckReducer from '../features/Support/CardDeck/cardDeckSlice';
import { cardApi } from '@/services/card';

export const store = configureStore({
  reducer: { cardDeck: cardDeckReducer, [cardApi.reducerPath]: cardApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
