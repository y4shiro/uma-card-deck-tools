import { Box, Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CardModal from './CardModal';
import CardSlot from './CardSlot';
import { RootState } from '@/app/store';

const CardDeck = (): JSX.Element => {
  const deck = useSelector((state: RootState) => state.cardDeck);

  return (
    <Box bgColor='blue.100'>
      <Grid w='100%' h='100%' p='4' gap='4' templateColumns='repeat(3, 1fr)'>
        {deck.map((d, index) => (
          <Box w='100%' h='100%' key={index}>
            <CardSlot slotId={d.slotId} cardId={d.cardId} />
          </Box>
        ))}
      </Grid>
      <CardModal />
    </Box>
  );
};

export default CardDeck;
