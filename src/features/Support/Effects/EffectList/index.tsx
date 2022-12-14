import { Box, SimpleGrid } from '@chakra-ui/react';
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
    <Box w='95%'>
      {effectList.map((effect) => {
        return (
          <React.Fragment key={`${effect.name}`}>
            <ComponentHeading>{effect.name}</ComponentHeading>

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
