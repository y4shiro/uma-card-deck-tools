import { Text, HStack, VStack, Center } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import { EffectListType } from '..';

type Props = {
  effectList: EffectListType[];
};

const EffectList: React.FC<Props> = ({ effectList }) => {
  return (
    <VStack w='100%' p='4' gap='1'>
      {effectList.map((effect) => {
        return (
          <React.Fragment key={`${effect.name}`}>
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
                <Text>{v.effect_value}</Text>
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
          </React.Fragment>
        );
      })}
    </VStack>
  );
};

export default EffectList;
