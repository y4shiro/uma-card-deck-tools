import { VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import EffectList from './EffectList';
import { generateEffectLists } from './generateEffectLists';

import { RootState } from '@/app/store';
import ComponentHeader from '@/components/ComponentHeader';
import { Effects, EffectValue } from '@/types/cards';

export type EffectListType = Omit<Effects, 'values'> & {
  values: Map<number, { card_id: number; card_name: string; effect_values: EffectValue[] }>;
};

const Status = (): JSX.Element => {
  const deck = useSelector((state: RootState) => state.cardDeck);
  const array = generateEffectLists(deck);

  return (
    <VStack w='100%' bgColor='blue.100'>
      <ComponentHeader>Status</ComponentHeader>

      <EffectList effectList={array} />
    </VStack>
  );
};

export default Status;
