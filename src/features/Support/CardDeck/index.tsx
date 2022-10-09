import { Box, Button, Grid, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { removeCard, SlotId } from './cardDeckSlice';
import { RootState } from '@/app/store';

const CardDeck = (): JSX.Element => {
  const deck = useSelector((state: RootState) => state.cardDeck);
  const dispatch = useDispatch();

  const removeHandler = (slotId: SlotId) => {
    dispatch(removeCard({ slotId }));
  };

  return (
    <Box bgColor='blue.100'>
      <Grid w='100%' h='100%' p='4' gap='4' templateColumns='repeat(3, 1fr)'>
        {deck.map((d, index) => (
          <Box w='100%' h='100%' key={index}>
            <Text>cardId: {d.cardId}</Text>
            <Button onClick={() => removeHandler(d.slotId)}>increment:{index}</Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CardDeck;
