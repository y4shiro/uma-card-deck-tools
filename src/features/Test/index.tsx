import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { switchFlag } from './testSlice';
import type { RootState } from '@/app/store';

const Test = () => {
  const flag = useSelector((state: RootState) => state.test.flag);
  const dispatch = useDispatch();

  return (
    <div>
      <p>flag: {`${flag}`}</p>
      <button onClick={() => dispatch(switchFlag())}>switch flag</button>
    </div>
  );
};

export default Test;
