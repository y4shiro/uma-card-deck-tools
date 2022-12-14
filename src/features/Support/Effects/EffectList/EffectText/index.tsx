import { Text } from '@chakra-ui/react';

import { EffectListType } from '../..';
import ItemText from '@/components/TextItem';
import { CardSlotType } from '@/types/cardSlot';
import { EffectValue } from '@/types/cards';

type Props = {
  deck: CardSlotType[];
  card_id: number;
  effect_values: EffectValue[];
  unit: EffectListType['unit'];
};

const generateValueString = (currentValue: number, unit: EffectListType['unit']) => {
  if (unit === 'integer') return `${currentValue}`;
  else if (unit === 'percent') return `${currentValue}%`;
  else if (unit === 'level') return 'Lv' + currentValue;
  else return `${currentValue}`;
};

const EffectText: React.FC<Props> = ({ deck, card_id, effect_values, unit }) => {
  const limitBreakStep = deck.find((d) => d.cardId === card_id)?.limitBreakStep;

  if (limitBreakStep === undefined) return <></>;

  const defaultLimitBreakStep = effect_values.length - 5;
  const currentLevel = effect_values[defaultLimitBreakStep + limitBreakStep].level;
  const currentValue = effect_values[defaultLimitBreakStep + limitBreakStep].value;

  const valueString = generateValueString(currentValue, unit);

  return (
    <>
      <ItemText fontSize={{ base: 14, sm: 18 }}>Lv: {currentLevel}</ItemText>
      <ItemText fontSize={{ base: 14, sm: 18 }}>+{valueString}</ItemText>
    </>
  );
};

export default EffectText;
