import { VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import EffectList from './EffectList';
import { generateEffectLists } from './generateEffectLists';

import { RootState } from '@/app/store';

import ComponentHeader from '@/components/ComponentHeader';
import ItemNotExistText from '@/components/ItemNotExistText';

import { Effects, EffectValue } from '@/types/cards';

export type EffectListType = Omit<Effects, 'values'> & {
  values: Map<number, { card_id: number; card_name: string; effect_values: EffectValue[] }>;
};

const Effects = (): JSX.Element => {
  const deck = useSelector((state: RootState) => state.cardDeck);
  const array = generateEffectLists(deck);

  return (
    <VStack w='100%' bgColor='#eee' borderRadius='12'>
      <ComponentHeader>サポカ効果一覧</ComponentHeader>

      {array.length ? (
        <EffectList effectList={array} />
      ) : (
        <ItemNotExistText>サポカ効果</ItemNotExistText>
      )}
    </VStack>
  );
};

export default Effects;
