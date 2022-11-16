import { Button, HStack, VStack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { decrementLimitBreak, incrementLimitBreak } from '../../cardDeckSlice';

import { LimitBreakSteps, SlotId } from '@/types/cardSlot';
import { CardType } from '@/types/cards';

type Props = {
  slotId: SlotId;
  cardData: CardType;
  limitBreakStep: LimitBreakSteps;
};

const RarityLevelTable = {
  R: [20, 25, 30, 35, 40],
  SR: [20, 25, 30, 35, 40, 45],
  SSR: [20, 25, 30, 35, 40, 45, 50],
};

const LimitBreak: React.FC<Props> = ({ slotId, cardData, limitBreakStep }) => {
  const dispatch = useDispatch();

  const incrementBreakLimit = (slotId: SlotId) => {
    dispatch(incrementLimitBreak(slotId));
  };

  const decrementBreakLimit = () => {
    dispatch(decrementLimitBreak(slotId));
  };

  const currentLimitBreakString = (limitBreakStep: LimitBreakSteps) => {
    let tmp: string = '';

    for (let i = 0; i < 4; i++) {
      tmp += i < limitBreakStep ? '◆' : '◇';
    }

    return tmp;
  };

  const currentLevel = () => {
    const rarity = cardData.card_rarity;
    const currentTable = RarityLevelTable[rarity];
    const tableLength = currentTable.length;
    const level = currentTable[tableLength - 5 + limitBreakStep];

    return level;
  };

  return (
    <VStack
      position='absolute'
      w='100%'
      top='70%'
      bottom='0'
      padding='2'
      bgColor='whiteAlpha.800'
      borderBottomRadius={{ base: 8, md: 12 }}
    >
      <HStack justifyContent='space-around'>
        <Button size='xs' colorScheme='red' onClick={() => decrementBreakLimit()}>
          -
        </Button>
        <Text fontSize='xl'>{currentLimitBreakString(limitBreakStep)}</Text>
        <Button size='xs' colorScheme='blue' onClick={() => incrementBreakLimit(slotId)}>
          +
        </Button>
      </HStack>
      <Text>Level:{currentLevel()}</Text>
    </VStack>
  );
};

export default LimitBreak;
