import { Text } from '@chakra-ui/react';

import { CardSlotType } from '@/types/cardSlot';
import { EffectValue } from '@/types/cards';

type Props = {
  deck: CardSlotType[];
  card_id: number;
  effect_values: EffectValue[];
};

const EffectValue: React.FC<Props> = ({ deck, card_id, effect_values }) => {
  const limitBreakStep = deck.find((d) => d.cardId === card_id)?.limitBreakStep!;
  const defaultLimitBreakStep = effect_values.length - 5;
  const currentLevel = effect_values[defaultLimitBreakStep + limitBreakStep].level;
  const currentValue = effect_values[defaultLimitBreakStep + limitBreakStep].value;

  return (
    <>
      <Text>Level: {currentLevel}</Text>
      <Text>{currentValue}</Text>
    </>
  );
};

export default EffectValue;
