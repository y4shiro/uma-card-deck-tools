import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react';
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
    <Box w='95%'>
      {effectList.map((effect) => {
        return (
          <React.Fragment key={`${effect.name}`}>
            <HStack
              w='100%'
              px='4'
              bgColor='#89c53d'
              borderRadius='4'
              clipPath='polygon(0 0, 100% 0%, 98% 100%, 0% 100%)'
            >
              <Text fontSize={{ base: 16, sm: 20 }} textColor='white' fontWeight='bold'>
                {effect.name}
              </Text>
            </HStack>
            <SimpleGrid w='100%' columns={{ base: 1, sm: 2 }} px='2' pt='4' pb='12' gap='2'>
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
    </Box>
  );
};

export default EffectList;
