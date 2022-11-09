import { Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import EffectList from './EffectList';
import { generateEffectLists } from './generateEffectLists';

import { RootState } from '@/app/store';
import { useGetCardsQuery } from '@/services/card';

export type EffectListType = {
  id: number;
  name: string;
  category: 'supportEffects' | 'initStatusUp';
  unit: 'integer' | 'percent' | 'level' | null;
  values: Map<number, { card_id: number; card_name: string; effect_value: number }>;
};

const Status = (): JSX.Element => {
  const { data, error, isLoading } = useGetCardsQuery();
  const deck = useSelector((state: RootState) => state.cardDeck);
  const deckCardidLists = deck.filter((card) => card.cardId).flatMap((card) => card.cardId);

  const array = generateEffectLists(data, deckCardidLists);

  return (
    <VStack w='100%' bgColor='blue.100'>
      <Text>Status</Text>

      <EffectList effectList={array} />
    </VStack>
  );
};

export default Status;
