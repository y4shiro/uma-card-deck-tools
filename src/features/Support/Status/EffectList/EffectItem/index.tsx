import { Center, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { EffectListType } from '../..';

import EffectText from '../EffectText';

import { CardSlotType } from '@/types/cardSlot';
import { EffectValue } from '@/types/cards';

type Props = {
  deck: CardSlotType[];
  effect: EffectListType;
  card: {
    card_id: number;
    card_name: string;
    effect_values: EffectValue[];
  };
};

const EffectItem: React.FC<Props> = ({ deck, effect, card }) => {
  return (
    <HStack w='100%' p='4' bgColor='white' borderRadius='8' shadow='md'>
      <Text>{effect.name}</Text>
      <EffectText
        deck={deck}
        card_id={card.card_id}
        effect_values={card.effect_values}
        unit={effect.unit}
      />
      <Center boxSize={{ base: '16px', md: '36px' }}>
        <Image
          width='64px'
          height='64px'
          src={`/uma-support-card/card-icons/${card.card_id}.png`}
          alt='サポートカードのアイコン'
        />
      </Center>
    </HStack>
  );
};

export default EffectItem;
