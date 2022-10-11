import { AspectRatio, Box, Icon } from '@chakra-ui/react';
import { ImPlus } from 'react-icons/im';
import { useDispatch } from 'react-redux';

import { openModal } from '../modalSlice';

import Card from '@/components/Card';

import { useGetCardsQuery } from '@/services/card';
import { SlotId } from '@/types/cardSlot';

type Props = {
  slotId: SlotId;
  cardId?: number | null;
  imgSize: { card: { width: number; height: number }; type: number } | undefined;
};

const CardSlot: React.FC<Props> = ({ slotId, cardId, imgSize }) => {
  const { data: cards, error, isLoading } = useGetCardsQuery();
  const card = cards?.find((c) => c.card_id === cardId);
  const dispatch = useDispatch();

  const openModalHandler = (slotId: SlotId) => {
    dispatch(openModal(slotId));
  };

  if (cardId)
    return (
      <Box
        cursor='pointer'
        _hover={{ opacity: 0.75 }}
        transition='0.25s'
        onClick={() => openModalHandler(slotId)}
      >
        <Card card={card!} imgSize={imgSize} />
      </Box>
    );

  return (
    <AspectRatio
      ratio={3 / 4}
      p='4'
      bgColor='#f6f6f6'
      borderRadius={{ base: 8, md: 12 }}
      boxShadow='3px 3px 8px 4px #ccc inset'
      _hover={{ bgColor: '#ddd' }}
      transition='0.25s'
      cursor='pointer'
      onClick={() => openModalHandler(slotId)}
    >
      <Box>
        <Icon as={ImPlus} boxSize={{ base: 6, sm: 8, md: 10 }} color='#89C950' />
      </Box>
    </AspectRatio>
  );
};

export default CardSlot;
