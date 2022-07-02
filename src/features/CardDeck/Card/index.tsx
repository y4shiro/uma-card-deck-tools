import { Center, GridItem } from '@chakra-ui/react';

const Card = ({ value }: { value: string }): JSX.Element => {
  return (
    <GridItem h='240px' w='180px' borderRadius='16' bgColor='gray.400'>
      <Center h='100%' w='100%'>
        {value}
      </Center>
    </GridItem>
  );
};

export default Card;
