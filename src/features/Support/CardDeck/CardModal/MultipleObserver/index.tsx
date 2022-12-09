import { Box, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

const MultipleObserver: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref}>
      {inView ? (
        children
      ) : (
        <Box maxW='90px' minH='120px'>
          <Text>Loading...</Text>
        </Box>
      )}
    </div>
  );
};

export default MultipleObserver;
