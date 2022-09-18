import { Box, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Card from './Card';
import { supabase } from '@/utils/supabaseClient';

type Skill = {
  id: number;
  name: string;
  skill_pt: string;
  img_path: string | null;
};
type CardType = {
  card_id: number;
  card_name: string;
  charactor_name: string;
  card_rarity: 'R' | 'SR' | 'SSR';
  card_type: 'Speed' | 'Stamina' | 'Power' | 'Guts' | 'Wisdom' | 'Friends' | 'Group';
  card_img_path: string | null;
  skills: Skill[];
};

const CardDeck = (): JSX.Element => {
  const cardDeck = ['1', '2', '3', '4', '5', '6'];
  const [cards, setCards] = useState<CardType[]>();

  useEffect(() => {
    const getCards = async () => {
      try {
        // const { data, error } = await supabase.from('view_cards_and_card_event_skills').select('*');
        const { data, error } = await supabase
          .from('view_cards_and_card_training_skills')
          .select('*');
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
            .filter((card) => card.card_type === 'Speed')
            .map((card, index) => <Card value={card.card_name} key={index} />)}
      </Grid>
    </Box>
  );
};

export default CardDeck;
