import { AspectRatio, Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { changeCard } from '../../cardDeckSlice';
import Card from '@/components/Card';
import type { SlotId } from '@/types/cardSlot';
import type { CardType } from '@/types/cards';

type Props = {
  card: CardType;
  imgSize: { card: { width: number; height: number }; type: number } | undefined;
  slotId: SlotId;
};

const SelectableCard: React.FC<Props> = ({ card, imgSize, slotId }) => {
  const dispatch = useDispatch();

  const changeHandler = ({ slotId, cardId = 99999 }: { slotId: SlotId; cardId: number }) => {
    dispatch(changeCard({ slotId, cardId }));
  };

  return (
    <Box
      cursor='pointer'
      _hover={{ opacity: 0.5 }}
      transition='0.25s'
      onClick={() => changeHandler({ slotId, cardId: card.card_id })}
    >
      <Card card={card} imgSize={imgSize} />
    </Box>
  );
};

export default SelectableCard;
