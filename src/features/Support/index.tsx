import { VStack } from '@chakra-ui/react';
import React from 'react';

import CardDeck from './CardDeck';
import Skills from './Skills';
import Status from './Status';

const Support = () => {
  return (
    <VStack w='100%' gap={{ base: 2, sm: 4 }}>
      <CardDeck />
      <Skills />
      <Status />
    </VStack>
  );
};

export default Support;
