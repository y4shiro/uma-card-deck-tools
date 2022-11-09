import { Text, HStack, VStack } from '@chakra-ui/react';

import { EffectListType } from '..';

type Props = {
  effectList: EffectListType[];
};

const EffectList: React.FC<Props> = ({ effectList }) => {
  return (
    <VStack>
      {effectList.map((effect) => {
        return (
          <>
            {[...effect.values].map(([_k, v]) => (
              <HStack key={`${effect.name},${v.card_id}`}>
                <Text>{effect.name}</Text>
                <Text>{v.card_name}</Text>
                <Text>{v.effect_value}</Text>
              </HStack>
            ))}
          </>
        );
      })}
    </VStack>
  );
};

export default EffectList;
