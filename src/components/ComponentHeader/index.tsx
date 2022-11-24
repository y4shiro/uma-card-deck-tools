import { Box, Text } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import React from 'react';

const ComponentHeader: React.FC<BoxProps> = ({ children }) => {
  return (
    <Box w='100%' py='2' bgColor='#89c53d' borderTopRadius='12' textAlign='center'>
      <Text
        color='white'
        fontSize={{ base: '1.25rem', sm: '1.5rem', lg: '1.75rem' }}
        fontWeight='bold'
      >
        {children}
      </Text>
    </Box>
  );
};

export default ComponentHeader;
