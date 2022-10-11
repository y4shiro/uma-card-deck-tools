import { Box, Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CardModal from './CardModal';
import CardSlot from './CardSlot';
import { RootState } from '@/app/store';

const CardDeck = (): JSX.Element => {
  const deck = useSelector((state: RootState) => state.cardDeck);

  return (
    <Box w={{ base: '100%', md: '640px' }} h='100%' bgColor='blue.100'>
      {/* sm: 30em(480px), md: 40em(768px), lg: 62em(992px), xl: 80em(1280px) */}
      <Grid p='4' gap='4' templateColumns='repeat(3, 1fr)'>
        {deck.map((d, index) => (
          <CardSlot slotId={d.slotId} cardId={d.cardId} key={d.slotId} />
        ))}
      </Grid>
      <CardModal />
    </Box>
  );
};

export default CardDeck;
