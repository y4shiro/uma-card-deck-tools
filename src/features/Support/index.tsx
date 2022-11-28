import { VStack } from '@chakra-ui/react';

import CardDeck from './CardDeck';
import Skills from './Skills';
import Status from './Status';

const Support: React.FC = () => {
  return (
    <VStack w='100%' gap={{ base: 2, sm: 8 }}>
      <CardDeck />
      <Status />
      <Skills />
    </VStack>
  );
};

export default Support;
