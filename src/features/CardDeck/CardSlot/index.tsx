import { AspectRatio, Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { Dispatch, useState } from 'react';
import { ActionType, SlotIdType } from '@/features/CardDeck';
import type { CardType } from '@/types/cards';

type Props = {
  // card?: CardType;
  // imgSize?: { card: { width: number; height: number }; type: number } | undefined;
  slotId: SlotIdType;
  cardId?: number | null;
  key?: number;
  dispatch: Dispatch<ActionType>;
  onOpen: () => void;
};

const CardSlot: React.FC<Props> = ({ slotId, cardId, dispatch, onOpen }) => {
  const [input, setInput] = useState(0);

  if (cardId !== null)
    return (
      <Box w='180px' h='240px' bgColor='red.100'>
        <Text>スロットID: {slotId}</Text>
        <Text>カードID: {cardId}</Text>
        <Text>カードあり</Text>

        <Button onClick={() => dispatch({ type: 'removeCard', payload: { slotId } })}>
          カード削除
        </Button>
        <Button onClick={() => onOpen()}>モーダル開く　</Button>
      </Box>
    );

  return (
    <Box w='180px' h='240px' bgColor='white'>
      <Text>スロットID: {slotId}</Text>
      <Text>カードなし</Text>
      <FormControl>
        <FormLabel>追加したいカード ID</FormLabel>
        <Input type='number' value={input} onChange={(e) => setInput(Number(e.target.value))} />
      </FormControl>

      <Button onClick={() => dispatch({ type: 'addCard', payload: { slotId, cardId: input } })}>
        カード追加
      </Button>
      <Button onClick={() => onOpen()}>モーダル開く　</Button>
    </Box>
  );
};

export default CardSlot;
