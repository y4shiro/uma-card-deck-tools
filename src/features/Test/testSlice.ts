import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './../../app/store';

type testState = {
  flag: boolean;
  count: number;
};

const initialState: testState = {
  flag: false,
  count: 0,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    switchFlag: (state) => {
      state.flag = !state.flag;
    },
  },
});

export const { incrementCount, switchFlag } = testSlice.actions;
export const selectFlag = (state: RootState) => state.test.flag;
export default testSlice.reducer;
