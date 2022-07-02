import { Box, Center, Grid, GridItem } from '@chakra-ui/react';

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

const Card = ({ value }: { value: string }): JSX.Element => {
  return (
    <GridItem h='240px' w='180px' borderRadius='16' bgColor='gray.400'>
      <Center h='100%' w='100%'>
        {value}
      </Center>
    </GridItem>
  );
};

export default CardDeck;
