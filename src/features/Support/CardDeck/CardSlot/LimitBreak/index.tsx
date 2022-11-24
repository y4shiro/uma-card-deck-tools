import { HStack, VStack, Text, IconButton } from '@chakra-ui/react';
import { ImMinus, ImPlus } from 'react-icons/im';
import { useDispatch } from 'react-redux';

import { decrementLimitBreak, incrementLimitBreak } from '../../cardDeckSlice';

import ItemText from '@/components/TextItem';

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
      padding={{ base: 1, md: 0 }}
      bgColor='whiteAlpha.800'
      borderBottomRadius={{ base: 8, md: 12 }}
      spacing='0'
    >
      <Text fontSize={{ base: 'xl', md: '3xl' }} textColor='twitter.600'>
        {currentLimitBreakString(limitBreakStep)}
      </Text>
      <HStack justifyContent='space-around' spacing={{ base: 1, sm: 2 }}>
        <IconButton
          size={{ base: 'xs', md: 'sm' }}
          colorScheme='red'
          onClick={() => decrementBreakLimit()}
          icon={<ImMinus />}
          aria-label={'サポカの限界突破レベルをマイナスするボタン'}
        />
        <ItemText fontSize={{ base: 'md', md: '2xl' }}>Lv:{currentLevel()}</ItemText>
        <IconButton
          size={{ base: 'xs', md: 'sm' }}
          colorScheme='blue'
          onClick={() => incrementBreakLimit(slotId)}
          icon={<ImPlus />}
          aria-label={'サポカの限界突破レベルをプラスするボタン'}
        />
      </HStack>
    </VStack>
  );
};

export default LimitBreak;
