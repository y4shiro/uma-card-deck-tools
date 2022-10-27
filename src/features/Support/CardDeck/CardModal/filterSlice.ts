import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';

export const filterKeys = [
  'Speed',
  'Stamina',
  'Power',
  'Guts',
  'Wisdom',
  'Friends',
  'Group',
  'SSR',
  'SR',
  'R',
] as const;
export type FilterKeysType = typeof filterKeys[number];
type FilterType = {
  [K in FilterKeysType]: boolean;
};

const initialState: FilterType = {
  Speed: false,
  Stamina: false,
  Power: false,
  Guts: false,
  Wisdom: false,
  Friends: false,
  Group: false,
  SSR: false,
  SR: false,
  R: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<keyof FilterType>) => {
      const { payload } = action;
      state[payload] = !state[payload];
    },
    resetFilter: () => {
      return initialState;
    },
  },
});

export const { toggleFilter, resetFilter } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter;
export default filterSlice.reducer;
