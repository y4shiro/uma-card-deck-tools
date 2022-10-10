import { AspectRatio, Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import CardModal from '../CardModal';
import { changeCard, removeCard } from '../cardDeckSlice';
import { SlotId } from '@/types/cardSlot';

type Props = {
  // card?: CardType;
  // imgSize?: { card: { width: number; height: number }; type: number } | undefined;
  slotId: SlotId;
  cardId?: number | null;
};

const CardSlot: React.FC<Props> = ({ slotId, cardId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const changeHandler = (slotId: SlotId, cardId: number = 99999) => {
    dispatch(changeCard({ slotId, cardId }));
  };

  const removeHandler = (slotId: SlotId) => {
    dispatch(removeCard({ slotId }));
  };

  const openModalHandler = () => {
    onOpen();
  };

  return (
    <Box w='180px' h='240px' bgColor={cardId ? 'red.100' : 'white'}>
      <Text>スロットID: {slotId}</Text>
      <Text>カードID: {cardId}</Text>
      <Text>カードあり</Text>

      <Button onClick={() => removeHandler(slotId)}>カード削除</Button>
      <Button onClick={() => changeHandler(slotId)}>カード追加</Button>
      <Button onClick={() => openModalHandler()}>モーダルを開く</Button>

      <CardModal isOpen={isOpen} onClose={onClose} slotId={slotId} />
    </Box>
  );
};

export default CardSlot;
