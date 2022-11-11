import { Text, HStack, VStack } from '@chakra-ui/react';

import { EffectListType } from '..';

type Props = {
  effectList: EffectListType[];
};

const EffectList: React.FC<Props> = ({ effectList }) => {
  return (
    <VStack w='100%' p='4' gap='1'>
      {effectList.map((effect) => {
        return (
          <>
            {[...effect.values].map(
              ([_k, v]) =>
                v.effect_value > 0 && (
                  <HStack
                    w='100%'
                    p='4'
                    bgColor='white'
                    borderRadius='8'
                    shadow='md'
                    key={`${effect.name},${v.card_id}`}
                  >
                    <Text>{effect.name}</Text>
                    <Text>{v.card_name}</Text>
                    <Text>{v.effect_value}</Text>
                  </HStack>
                ),
            )}
          </>
        );
      })}
    </VStack>
  );
};

export default EffectList;
