import { Center, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

import { EffectListType } from '..';
import EffectText from './EffectText';

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
              {[...effect.values].map(([_k, v]) => (
                <HStack
                  w='100%'
                  p='4'
                  bgColor='white'
                  borderRadius='8'
                  shadow='md'
                  key={`${effect.name},${v.card_id}`}
                >
                  <Text>{effect.name}</Text>
                  <EffectText
                    deck={deck}
                    card_id={v.card_id}
                    effect_values={v.effect_values}
                    unit={effect.unit}
                  />
                  <Center boxSize={{ base: '16px', md: '36px' }}>
                    <Image
                      width='64px'
                      height='64px'
                      src={`/uma-support-card/card-icons/${v.card_id}.png`}
                      alt='サポートカードのアイコン'
                    />
                  </Center>
                </HStack>
              ))}
            </SimpleGrid>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default EffectList;
