import { configureStore } from '@reduxjs/toolkit';
import cardDeckReducer from '../features/Support/CardDeck/cardDeckSlice';

export const store = configureStore({ reducer: { cardDeck: cardDeckReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
