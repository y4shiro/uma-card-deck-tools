import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';
import type { SlotId } from '@/types/cardSlot';

type modalType = { isOpen: boolean; slotId: SlotId | null };
const initialState: modalType = { isOpen: false, slotId: null };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<SlotId>) => {
      state.isOpen = true;
      state.slotId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.slotId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal;
export default modalSlice.reducer;
