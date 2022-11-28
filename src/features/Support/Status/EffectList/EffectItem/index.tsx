import { Center, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { EffectListType } from '../..';

import EffectText from '../EffectText';
import ItemText from '@/components/TextItem';

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
    <HStack w='100%' p={{ base: 2, md: 4 }} bgColor='white' borderRadius='8' shadow='md'>
      <ItemText fontSize={{ base: 14, sm: 18 }}>{effect.name}</ItemText>
      <EffectText
        deck={deck}
        card_id={card.card_id}
        effect_values={card.effect_values}
        unit={effect.unit}
      />
      <Center boxSize={{ base: '28px', md: '40px' }}>
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
