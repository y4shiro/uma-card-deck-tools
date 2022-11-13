import { Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import EffectList from './EffectList';
import { generateEffectLists } from './generateEffectLists';

import { RootState } from '@/app/store';

export type EffectListType = {
  id: number;
  name: string;
  category: 'supportEffects' | 'initStatusUp';
  unit: 'integer' | 'percent' | 'level' | null;
  values: Map<number, { card_id: number; card_name: string; effect_value: number }>;
};

const Status = (): JSX.Element => {
  const deck = useSelector((state: RootState) => state.cardDeck);
  const array = generateEffectLists(deck);

  return (
    <VStack w='100%' bgColor='blue.100'>
      <Text>Status</Text>

      <EffectList effectList={array} />
    </VStack>
  );
};

export default Status;
