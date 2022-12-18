import { VStack } from '@chakra-ui/react';

import CardDeck from './CardDeck';
import Effects from './Effects';
import Skills from './Skills';

const Support: React.FC = () => {
  return (
    <VStack w='100%' gap={{ base: 2, sm: 8 }}>
      <CardDeck />
      <Effects />
      <Skills />
    </VStack>
  );
};

export default Support;
