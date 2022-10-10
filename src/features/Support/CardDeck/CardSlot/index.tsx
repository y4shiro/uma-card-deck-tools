import { AspectRatio, Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { changeCard, removeCard } from '../cardDeckSlice';
import { openModal } from '../modalSlice';
import { SlotId } from '@/types/cardSlot';

type Props = {
  // card?: CardType;
  // imgSize?: { card: { width: number; height: number }; type: number } | undefined;
  slotId: SlotId;
  cardId?: number | null;
};

const CardSlot: React.FC<Props> = ({ slotId, cardId }) => {
  const dispatch = useDispatch();

  const changeHandler = (slotId: SlotId, cardId: number = 99999) => {
    dispatch(changeCard({ slotId, cardId }));
  };

  const openModalHandler = (slotId: SlotId) => {
    dispatch(openModal(slotId));
  };

  return (
    <Box w='180px' h='240px' bgColor={cardId ? 'red.100' : 'white'}>
      <Text>スロットID: {slotId}</Text>
      <Text>カードID: {cardId}</Text>
      <Text>カードあり</Text>

      <Button onClick={() => changeHandler(slotId)}>カード追加</Button>
      <Button onClick={() => openModalHandler(slotId)}>モーダルを開く</Button>
    </Box>
  );
};

export default CardSlot;
