import { Box, Grid } from '@chakra-ui/react';
import Card from './Card';

const CardDeck = (): JSX.Element => {
  const cardDeck = ['1', '2', '3', '4', '5', '6'];

  return (
    <Box bgColor='blue.100'>
      <Grid w='100%' h='100%' p='4' gap='4' templateColumns='repeat(3, 1fr)'>
        {cardDeck.map((value, index) => (
          <Card value={value} key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default CardDeck;
