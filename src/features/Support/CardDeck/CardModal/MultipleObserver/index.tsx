import { AspectRatio, Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

const MultipleObserver: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView ? (
        children
      ) : (
        <AspectRatio ratio={3 / 4} bgColor='gray.400' borderRadius='16'>
          <Box />
        </AspectRatio>
      )}
    </div>
  );
};

export default MultipleObserver;
