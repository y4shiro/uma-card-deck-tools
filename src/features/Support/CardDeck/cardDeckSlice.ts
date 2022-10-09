import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

export type SlotId = 0 | 1 | 2 | 3 | 4 | 5;
type cardSlotType = { slotId: SlotId; cardId: number | null };

const initialState: cardSlotType[] = [
  { slotId: 0, cardId: 30000 },
  { slotId: 1, cardId: 30001 },
  { slotId: 2, cardId: 30002 },
  { slotId: 3, cardId: 30003 },
  { slotId: 4, cardId: 30004 },
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
