import { HStack, Text } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';
import React from 'react';

const ComponentHeading: React.FC<StackProps> = ({ children }) => {
  return (
    <HStack
      w='100%'
      px='4'
      bgColor='#89c53d'
      borderRadius='4'
      clipPath='polygon(0 0, 100% 0%, 98% 100%, 0% 100%)'
    >
      <Text fontSize={{ base: 16, sm: 20 }} textColor='white' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
};

export default ComponentHeading;
