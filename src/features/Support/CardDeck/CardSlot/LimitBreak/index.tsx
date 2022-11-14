import { Button, HStack, VStack, Text } from '@chakra-ui/react';

import { LimitBreakSteps } from '@/types/cardSlot';

type Props = {
  limitBreakSteps: LimitBreakSteps;
};

const LimitBreak: React.FC<Props> = ({ limitBreakSteps }) => {
  const incrementBreakLimit = () => {
    console.log('increment');
  };

  const decrementBreakLimit = () => {
    console.log('decrement');
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
        <Button size='xs' colorScheme='blue' onClick={() => incrementBreakLimit()}>
          +
        </Button>
      </HStack>
      <Text>凸数:{limitBreakSteps}</Text>
    </VStack>
  );
};

export default LimitBreak;
