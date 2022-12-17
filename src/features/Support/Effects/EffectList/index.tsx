import { Box, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { EffectListType } from '..';
import EffectItem from './EffectItem';

import { RootState } from '@/app/store';
import ComponentHeading from '@/components/ComponentHeading';

type Props = {
  effectList: EffectListType[];
};

const EffectList: React.FC<Props> = ({ effectList }) => {
  const deck = useSelector((state: RootState) => state.cardDeck);

  return (
    <VStack w='100%' p={{ base: 2, md: 4 }} gap='2'>
      {effectList.map((effect) => {
        return (
          <Box w='100%' key={`${effect.name}`}>
            <ComponentHeading>{effect.name}</ComponentHeading>

            <SimpleGrid w='100%' columns={{ base: 1, sm: 2 }} p={{ base: 2, md: 4 }} gap='2'>
              {[...effect.values].map(([_k, card]) => (
                <EffectItem
                  deck={deck}
                  effect={effect}
                  card={card}
                  key={`${effect.name},${card.card_id}`}
                />
              ))}
            </SimpleGrid>
          </Box>
        );
      })}
    </VStack>
  );
};

export default EffectList;
