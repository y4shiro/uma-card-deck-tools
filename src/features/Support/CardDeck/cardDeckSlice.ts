import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import type { SlotId } from '@/types/cardSlot';

type cardSlotType = { slotId: SlotId; cardId: number | null; belongCharaIds: number[] };

const initialState: cardSlotType[] = [
  { slotId: 0, cardId: null, belongCharaIds: [] },
  { slotId: 1, cardId: null, belongCharaIds: [] },
  { slotId: 2, cardId: null, belongCharaIds: [] },
  { slotId: 3, cardId: null, belongCharaIds: [] },
  { slotId: 4, cardId: null, belongCharaIds: [] },
  { slotId: 5, cardId: null, belongCharaIds: [] },
];
export const cardDeckSlice = createSlice({
  name: 'cardDeck',
  initialState,
  reducers: {
    changeCard: (state, action: PayloadAction<cardSlotType>) => {
      const { slotId, cardId, belongCharaIds } = action.payload;
      state[slotId] = { slotId, cardId, belongCharaIds };
    },
    removeCard: (state, action: PayloadAction<{ slotId: SlotId }>) => {
      const { slotId } = action.payload;
      state[slotId] = { slotId, cardId: null, belongCharaIds: [] };
    },
  },
});

export const { changeCard, removeCard } = cardDeckSlice.actions;
// export const selectDeck = (state: RootState) => state.cardDeck;
export default cardDeckSlice.reducer;
