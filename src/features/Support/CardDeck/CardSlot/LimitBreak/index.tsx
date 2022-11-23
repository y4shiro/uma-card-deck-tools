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
      top={{ base: '55%', sm: '65%' }}
      bottom='0'
      padding={{ base: 1, sm: 2 }}
      bgColor='whiteAlpha.800'
      borderBottomRadius={{ base: 8, md: 12 }}
      spacing={{ base: '0', sm: '2' }}
    >
      <Text fontSize={{ base: 'xl', sm: '3xl' }} textColor='twitter.600'>
        {currentLimitBreakString(limitBreakStep)}
      </Text>
      <HStack justifyContent='space-around' spacing={{ base: 1 }}>
        <Button size='xs' colorScheme='red' onClick={() => decrementBreakLimit()}>
          -
        </Button>
        <Text>Lv:{currentLevel()}</Text>
        <Button size='xs' colorScheme='blue' onClick={() => incrementBreakLimit(slotId)}>
          +
        </Button>
      </HStack>
    </VStack>
  );
};

export default LimitBreak;
