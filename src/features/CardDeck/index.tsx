import { Box, Button, Grid, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import CardSelectModal from './CardSelectModal';
import CardSlot from './CardSlot';
import type { CardType } from '@/types/cards';
import { supabase } from '@/utils/supabaseClient';

type CardSlotType = { slotId: 0 | 1 | 2 | 3 | 4 | 5; cardId: number | null };
const initCardDeck: CardSlotType[] = [
  { slotId: 0, cardId: 30001 },
  { slotId: 1, cardId: 30002 },
  { slotId: 2, cardId: 30003 },
  { slotId: 3, cardId: 30004 },
  { slotId: 4, cardId: 30005 },
  { slotId: 5, cardId: null },
];

const CardDeck = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cards, setCards] = useState<CardType[]>();
  const [deck, setDeck] = useState<CardSlotType[]>(initCardDeck);

  useEffect(() => {
    const getCards = async () => {
      try {
        const { data, error } = await supabase.from('view_cards_json').select('*');
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCards();
  }, []);

  return (
    <Box bgColor='blue.100'>
      <Button onClick={onOpen}>Open Modal</Button>

      <Grid w='100%' h='100%' p='4' gap='4' templateColumns='repeat(3, 1fr)'>
        {deck.map((value, key) => (
          <CardSlot slotId={value.slotId} cardId={value.cardId} key={key} />
        ))}
      </Grid>

      <CardSelectModal cards={cards} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default CardDeck;
