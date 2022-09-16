import { Box, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Card from './Card';
import { supabase } from '@/utils/supabaseClient';

type CardType = {
  id: number;
  name: string;
  charactor_name: string;
  rarity: 'R' | 'SR' | 'SSR';
  type: 'Speed' | 'Stamina' | 'Power' | 'Guts' | 'Wisdom' | 'Friends' | 'Group';
  img_path: string | null;
};

const CardDeck = (): JSX.Element => {
  const cardDeck = ['1', '2', '3', '4', '5', '6'];
  const [cards, setCards] = useState<CardType[]>();

  useEffect(() => {
    const getCards = async () => {
      try {
        const { data, error } = await supabase.from('cards').select('*');
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCards();
  }, []);

  console.log(cards);

  return (
    <Box bgColor='blue.100'>
      <Grid w='100%' h='100%' p='4' gap='4' templateColumns='repeat(3, 1fr)'>
        {/* {cardDeck.map((value, index) => (
          <Card value={value} key={index} />
        ))} */}
        {/* {cards && cards.map((card, index) => <Card value={card.name} key={index} />)} */}
        {cards &&
          cards
            .filter((card) => card.type === 'Speed')
            .map((card, index) => <Card value={card.name} key={index} />)}
      </Grid>
    </Box>
  );
};

export default CardDeck;
