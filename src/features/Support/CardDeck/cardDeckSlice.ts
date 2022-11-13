import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';

import type { CardSlotType, SlotId } from '@/types/cardSlot';

const initialState: CardSlotType[] = [
  { slotId: 0, cardId: null, cardData: null, belongCharaIds: [] },
  { slotId: 1, cardId: null, cardData: null, belongCharaIds: [] },
  { slotId: 2, cardId: null, cardData: null, belongCharaIds: [] },
  { slotId: 3, cardId: null, cardData: null, belongCharaIds: [] },
  { slotId: 4, cardId: null, cardData: null, belongCharaIds: [] },
  { slotId: 5, cardId: null, cardData: null, belongCharaIds: [] },
];
export const cardDeckSlice = createSlice({
  name: 'cardDeck',
  initialState,
  reducers: {
    changeCard: (state, action: PayloadAction<CardSlotType>) => {
      const { slotId, cardId, cardData, belongCharaIds } = action.payload;
      state[slotId] = { slotId, cardId, cardData, belongCharaIds };
    },
    removeCard: (state, action: PayloadAction<{ slotId: SlotId }>) => {
      const { slotId } = action.payload;
      state[slotId] = { slotId, cardId: null, cardData: null, belongCharaIds: [] };
    },
  },
});

export const { changeCard, removeCard } = cardDeckSlice.actions;
// export const selectDeck = (state: RootState) => state.cardDeck;
export default cardDeckSlice.reducer;
