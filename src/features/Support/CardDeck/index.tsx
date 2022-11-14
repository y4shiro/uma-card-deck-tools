import { Box, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CardModal from './CardModal';
import CardSlot from './CardSlot';
import { RootState } from '@/app/store';

const CardDeck: React.FC = () => {
  const deck = useSelector((state: RootState) => state.cardDeck);

  const imgSize = useBreakpointValue(
    {
      base: { card: { width: 120, height: 160 }, type: 24 },
      sm: { card: { width: 120, height: 160 }, type: 28 },
      md: { card: { width: 180, height: 240 }, type: 36 },
    },
    'base',
  );

  return (
    <Box w={{ base: '100%', sm: '480px', md: '640px' }} h='100%' bgColor='blue.100'>
      {/* sm: 30em(480px), md: 40em(768px), lg: 62em(992px), xl: 80em(1280px) */}
      <Grid p='4' gap={{ base: 2, sm: 4 }} templateColumns='repeat(3, 1fr)'>
        {deck.map((d, index) => (
          <CardSlot
            slotId={d.slotId}
            cardId={d.cardId}
            limitBreakSteps={d.limitBreakStep}
            imgSize={imgSize}
            key={d.slotId}
          />
        ))}
      </Grid>
      <CardModal imgSize={imgSize} />
    </Box>
  );
};

export default CardDeck;
