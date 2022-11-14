import { Button, HStack, VStack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { decrementLimitBreak, incrementLimitBreak } from '../../cardDeckSlice';

import { LimitBreakSteps, SlotId } from '@/types/cardSlot';

type Props = {
  slotId: SlotId;
  limitBreakSteps: LimitBreakSteps;
};

const LimitBreak: React.FC<Props> = ({ slotId, limitBreakSteps }) => {
  const dispatch = useDispatch();

  const incrementBreakLimit = (slotId: SlotId) => {
    dispatch(incrementLimitBreak(slotId));
  };

  const decrementBreakLimit = () => {
    dispatch(decrementLimitBreak(slotId));
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
        <Text fontSize='xl'>◆◆◆◇</Text>
        <Button size='xs' colorScheme='blue' onClick={() => incrementBreakLimit(slotId)}>
          +
        </Button>
      </HStack>
      <Text>凸数:{limitBreakSteps}</Text>
    </VStack>
  );
};

export default LimitBreak;
