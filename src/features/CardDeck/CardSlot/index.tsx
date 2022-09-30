import { AspectRatio, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

type Props = {
  // card?: CardType;
  // imgSize?: { card: { width: number; height: number }; type: number } | undefined;
  slotId: number;
  cardId?: number;
  key?: number;
};

const CardSlot: React.FC<Props> = ({ slotId, cardId }) => {
  if (cardId)
    return (
      <Box w='180px' h='240px' bgColor='red.100'>
        <Text>スロットID: {slotId}</Text>
        <Text>カードID: {cardId}</Text>
        <Text>カードあり</Text>
      </Box>
    );

  return (
    <Box>
      <Text>スロットID: {slotId}</Text>
      <Text>カードなし</Text>
    </Box>
  );
};

export default CardSlot;
