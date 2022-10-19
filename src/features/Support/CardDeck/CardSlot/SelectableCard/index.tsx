import { Box, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@/components/Card';

import { changeCard } from '@/features/Support/CardDeck/cardDeckSlice';
import { closeModal, selectModal } from '@/features/Support/CardDeck/modalSlice';
import type { SlotId } from '@/types/cardSlot';
import type { CardType, ImgSize } from '@/types/cards';

type Props = {
  card: CardType;
  selectedCards: (number | null)[];
  belongCharaIds: Set<number>;
  imgSize: ImgSize;
};

const SelectableCard: React.FC<Props> = ({ card, imgSize, selectedCards }) => {
  const dispatch = useDispatch();
  const { slotId } = useSelector(selectModal);
  const alreadySelectedCard = selectedCards.includes(card.card_id);

  const changeHandler = ({ slotId, cardId }: { slotId: SlotId; cardId: number }) => {
    dispatch(changeCard({ slotId, cardId }));
    dispatch(closeModal());
  };

  if (alreadySelectedCard)
    return (
      <Box position='relative'>
        <Box filter='auto' brightness='40%'>
          <Card card={card} imgSize={imgSize} />
        </Box>
        <Box
          position='absolute'
          top='-2%'
          right='12%'
          left='12%'
          margin='auto'
          px={{ base: '2px', md: '6px', lg: '12px' }}
          borderRadius='12px'
          textColor='white'
          background='#E4436B'
        >
          <Text fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '20px' }} fontWeight='bold'>
            設定中
          </Text>
        </Box>
      </Box>
    );

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
