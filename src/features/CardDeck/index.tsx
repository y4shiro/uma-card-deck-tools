import { Box, Grid, useDisclosure } from '@chakra-ui/react';
import { Reducer, useEffect, useReducer, useState } from 'react';

import CardSelectModal from './CardSelectModal';
import CardSlot from './CardSlot';
import type { CardType } from '@/types/cards';
import { supabase } from '@/utils/supabaseClient';

export type SlotIdType = 0 | 1 | 2 | 3 | 4 | 5;
type CardSlotStoreType = { slotId: SlotIdType; cardId: number | null };
const initCardDeckState: CardSlotStoreType[] = [
  { slotId: 0, cardId: 30001 },
  { slotId: 1, cardId: 30002 },
  { slotId: 2, cardId: 30003 },
  { slotId: 3, cardId: 30004 },
  { slotId: 4, cardId: 30005 },
  { slotId: 5, cardId: null },
];

export type ActionType =
  | { type: 'addCard'; payload: { slotId: SlotIdType; cardId: number } }
  | { type: 'removeCard'; payload: { slotId: SlotIdType } };

const reducer: Reducer<CardSlotStoreType[], ActionType> = (state, action) => {
  switch (action.type) {
    case 'addCard':
      return [...state, { slotId: action.payload.slotId, cardId: action.payload.cardId }];
    case 'removeCard':
      return state.map((cardSlot) => {
        if (cardSlot.slotId === action.payload.slotId) cardSlot.cardId = null;
        return cardSlot;
      });
    default:
      return state;
  }
};

const CardDeck = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cards, setCards] = useState<CardType[]>();
  const [deck, dispatch] = useReducer(reducer, initCardDeckState);

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
        {deck.map((value, key) => (
          <CardSlot slotId={value.slotId} cardId={value.cardId} dispatch={dispatch} key={key} />
        ))}
      </Grid>

      <CardSelectModal cards={cards} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default CardDeck;
