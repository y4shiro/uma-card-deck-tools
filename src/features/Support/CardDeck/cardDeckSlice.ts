import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import type { SlotId } from '@/types/cardSlot';

type cardSlotType = { slotId: SlotId; cardId: number | null };

const initialState: cardSlotType[] = [
  { slotId: 0, cardId: null },
  { slotId: 1, cardId: null },
  { slotId: 2, cardId: null },
  { slotId: 3, cardId: null },
  { slotId: 4, cardId: null },
  { slotId: 5, cardId: null },
];
export const cardDeckSlice = createSlice({
  name: 'cardDeck',
  initialState,
  reducers: {
    changeCard: (state, action: PayloadAction<cardSlotType>) => {
      const { slotId, cardId } = action.payload;
      state[slotId] = { slotId, cardId };
    },
    removeCard: (state, action: PayloadAction<{ slotId: SlotId }>) => {
      const { slotId } = action.payload;
      state[slotId] = { slotId, cardId: null };
    },
  },
});

export const { changeCard, removeCard } = cardDeckSlice.actions;
// export const selectDeck = (state: RootState) => state.cardDeck;
export default cardDeckSlice.reducer;
