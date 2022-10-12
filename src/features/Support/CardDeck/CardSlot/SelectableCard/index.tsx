import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@/components/Card';

import { changeCard } from '@/features/Support/CardDeck/cardDeckSlice';
import { closeModal, selectModal } from '@/features/Support/CardDeck/modalSlice';
import type { SlotId } from '@/types/cardSlot';
import type { CardType, ImgSize } from '@/types/cards';

type Props = {
  card: CardType;
  selectedCards: (number | null)[];
  imgSize: ImgSize;
};

const SelectableCard: React.FC<Props> = ({ card, imgSize }) => {
  const dispatch = useDispatch();
  const { slotId } = useSelector(selectModal);

  const changeHandler = ({ slotId, cardId }: { slotId: SlotId; cardId: number }) => {
    dispatch(changeCard({ slotId, cardId }));
    dispatch(closeModal());
  };

  return (
    <Box
      cursor='pointer'
      _hover={{ opacity: 0.5 }}
      transition='0.25s'
      onClick={() => changeHandler({ slotId: slotId!, cardId: card.card_id })}
    >
      <Card card={card} imgSize={imgSize} />
    </Box>
  );
};

export default SelectableCard;
