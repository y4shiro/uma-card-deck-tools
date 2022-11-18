import { HStack, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { EffectListType } from '..';
import EffectItem from './EffectItem';

import { RootState } from '@/app/store';

type Props = {
  effectList: EffectListType[];
};

const EffectList: React.FC<Props> = ({ effectList }) => {
  const deck = useSelector((state: RootState) => state.cardDeck);

  return (
    <>
      {effectList.map((effect) => {
        return (
          <React.Fragment key={`${effect.name}`}>
            <HStack w='100%' p='4' bgColor='green.300' borderRadius='8'>
              <Text>{effect.name}</Text>
            </HStack>
            <SimpleGrid w='100%' columns={{ base: 1, sm: 2 }} px='4' pt='4' pb='12' gap='2'>
              {[...effect.values].map(([_k, card]) => (
                <EffectItem
                  deck={deck}
                  effect={effect}
                  card={card}
                  key={`${effect.name},${card.card_id}`}
                />
              ))}
            </SimpleGrid>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default EffectList;
