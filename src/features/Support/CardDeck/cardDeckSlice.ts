import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';

import type { CardSlotType, SlotId } from '@/types/cardSlot';

const initialState: CardSlotType[] = [
  { slotId: 0, cardId: null, cardData: null, limitBreakStep: 0, belongCharaIds: [] },
  { slotId: 1, cardId: null, cardData: null, limitBreakStep: 0, belongCharaIds: [] },
  { slotId: 2, cardId: null, cardData: null, limitBreakStep: 0, belongCharaIds: [] },
  { slotId: 3, cardId: null, cardData: null, limitBreakStep: 0, belongCharaIds: [] },
  { slotId: 4, cardId: null, cardData: null, limitBreakStep: 0, belongCharaIds: [] },
  { slotId: 5, cardId: null, cardData: null, limitBreakStep: 0, belongCharaIds: [] },
];

export const cardDeckSlice = createSlice({
  name: 'cardDeck',
  initialState,
  reducers: {
    changeCard: (state, action: PayloadAction<Omit<CardSlotType, 'limitBreakStep'>>) => {
      const { slotId, cardId, cardData, belongCharaIds } = action.payload;
      state[slotId] = { slotId, cardId, cardData, limitBreakStep: 0, belongCharaIds };
    },
    removeCard: (state, action: PayloadAction<{ slotId: SlotId }>) => {
      const { slotId } = action.payload;
      state[slotId] = {
        slotId,
        cardId: null,
        cardData: null,
        limitBreakStep: 0,
        belongCharaIds: [],
      };
    },
    incrementLimitBreak: (state, action: PayloadAction<SlotId>) => {
      const slotId = action.payload;
      if (state[slotId].limitBreakStep < 4) state[slotId].limitBreakStep++;
    },
    decrementLimitBreak: (state, action: PayloadAction<SlotId>) => {
      const slotId = action.payload;
      if (state[slotId].limitBreakStep > 0) state[slotId].limitBreakStep--;
    },
  },
});

export const { changeCard, removeCard, incrementLimitBreak, decrementLimitBreak } =
  cardDeckSlice.actions;
// export const selectDeck = (state: RootState) => state.cardDeck;
export default cardDeckSlice.reducer;
