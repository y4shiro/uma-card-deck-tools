import { Box, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Card from './Card';
import { supabase } from '@/utils/supabaseClient';

type Effects = {
  id: number;
  name: string;
  values: EffectValue[];
};

type EffectValue = {
  level: number;
  value: number;
};

type EventSkill = {
  id: number;
  name: string;
  skill_pt: number | null;
  img_path: string | null;
};

type TrainingSkill = {
  id: number;
  name: string;
  skill_pt: number | null;
  img_path: string | null;
};

type StatusGain = {
  id: number;
  name: string;
  value: number;
};

type CardType = {
  card_id: number;
  card_name: string;
  charactor_name: string;
  card_rarity: 'R' | 'SR' | 'SSR';
  card_type: 'Speed' | 'Stamina' | 'Power' | 'Guts' | 'Wisdom' | 'Friends' | 'Group';
  card_img_path: string | null;
  effects: Effects[];
  event_skills?: EventSkill[];
  training_skills?: TrainingSkill[];
  status_gains?: StatusGain[];
};

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
