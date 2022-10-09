import { AspectRatio, Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeCard, removeCard, SlotId } from '../cardDeckSlice';

type Props = {
  // card?: CardType;
  // imgSize?: { card: { width: number; height: number }; type: number } | undefined;
  slotId: SlotId;
  cardId?: number | null;
};

const CardSlot: React.FC<Props> = ({ slotId, cardId }) => {
  const [input, setInput] = useState(0);
  const dispatch = useDispatch();

  const changeHandler = (slotId: SlotId, cardId: number) => {
    dispatch(changeCard({ slotId, cardId }));
  };

  const removeHandler = (slotId: SlotId) => {
    dispatch(removeCard({ slotId }));
  };

  if (cardId !== null)
    return (
      <Box w='180px' h='240px' bgColor='red.100'>
        <Text>スロットID: {slotId}</Text>
        <Text>カードID: {cardId}</Text>
        <Text>カードあり</Text>

        <Button onClick={() => removeHandler(slotId)}>カード削除</Button>
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

      <Button onClick={() => changeHandler(slotId, input)}>カード追加</Button>
    </Box>
  );
};

export default CardSlot;
