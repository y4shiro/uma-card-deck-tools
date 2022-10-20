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

const SelectableCard: React.FC<Props> = ({ card, imgSize, selectedCards, belongCharaIds }) => {
  const dispatch = useDispatch();
  const { openSlotId } = useSelector(selectModal);
  const alreadySelectedCard = selectedCards.includes(card.card_id);
  const alreadyDuplicateCard = belongCharaIds.has(card.charactor_id);

  const changeHandler = ({
    slotId,
    cardId,
    belongCharaIds,
  }: {
    slotId: SlotId;
    cardId: number;
    belongCharaIds: number[];
  }) => {
    dispatch(changeCard({ slotId, cardId, belongCharaIds }));
    dispatch(closeModal());
  };

  if (alreadySelectedCard)
    return <AlreadySelectedCard card={card} imgSize={imgSize} type={'selected'} />;
  else if (alreadyDuplicateCard)
    return <AlreadySelectedCard card={card} imgSize={imgSize} type={'duplicate'} />;

  return (
    <Box
      cursor='pointer'
      _hover={{ opacity: 0.5 }}
      transition='0.25s'
      onClick={() =>
        changeHandler({
          slotId: openSlotId!,
          cardId: card.card_id,
          belongCharaIds: card.belong_charactor_ids,
        })
      }
    >
      <Card card={card} imgSize={imgSize} />
    </Box>
  );
};

const AlreadySelectedCard: React.FC<
  Pick<Props, 'card' | 'imgSize'> & { type: 'selected' | 'duplicate' }
> = ({ card, imgSize, type }) => {
  return (
    <Box position='relative'>
      <Box filter='auto' brightness='40%'>
        <Card card={card} imgSize={imgSize} />
      </Box>
      <Box
        position='absolute'
        top='-2%'
        right='0%'
        left='0%'
        margin='auto'
        px={{ base: '2px', md: '6px', lg: '8x' }}
        borderRadius='12px'
        textColor='white'
        background={type === 'selected' ? '#E4436B' : '#E6553E'}
      >
        {type === 'selected' ? (
          <Text fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '20px' }} fontWeight='bold'>
            設定中
          </Text>
        ) : (
          <Text fontSize={{ base: '8px', sm: '12px', md: '16px', lg: '20px' }} fontWeight='bold'>
            !サポ重複
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default SelectableCard;
