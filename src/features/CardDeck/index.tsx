import { Box, Button, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Card from './Card';
import CardSelectModal from './CardSelectModal';
import type { CardType } from '@/types/cards';
import { supabase } from '@/utils/supabaseClient';

const CardDeck = (): JSX.Element => {
  const cardDeck = ['1', '2', '3', '4', '5', '6'];
  const [cards, setCards] = useState<CardType[]>();

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
      <Grid w='100%' h='100%' p='4' gap='4' templateColumns='repeat(3, 1fr)'>
        {cardDeck.map((value, index) => (
          <Button key={index}>Open Modal</Button>
        ))}
        {/* {cards &&
          cards
            .filter((card) => card.card_type === 'Guts')
            .map((card, index) => <Card card={card} key={index} />)} */}
      </Grid>

      <CardSelectModal cards={cards!} />
    </Box>
  );
};

export default CardDeck;
