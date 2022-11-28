import { Center, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import EffectList from './EffectList';
import { generateEffectLists } from './generateEffectLists';

import { RootState } from '@/app/store';
import ComponentHeader from '@/components/ComponentHeader';
import ItemText from '@/components/TextItem';
import { Effects, EffectValue } from '@/types/cards';

export type EffectListType = Omit<Effects, 'values'> & {
  values: Map<number, { card_id: number; card_name: string; effect_values: EffectValue[] }>;
};

const Status = (): JSX.Element => {
  const deck = useSelector((state: RootState) => state.cardDeck);
  const array = generateEffectLists(deck);

  return (
    <VStack w='100%' bgColor='#eee' borderRadius='12'>
      <ComponentHeader>サポカ効果一覧</ComponentHeader>

      {array.length ? (
        <EffectList effectList={array} />
      ) : (
        <Center w='100%' h={{ base: '96px', md: '120px' }}>
          <ItemText fontSize={{ base: '20px', md: '24px' }}>サポカ効果が存在しません</ItemText>
        </Center>
      )}
    </VStack>
  );
};

export default Status;
