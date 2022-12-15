import { Center } from '@chakra-ui/react';
import type { CenterProps } from '@chakra-ui/react';
import React from 'react';

import ItemText from '../TextItem';

const ItemNotExistText: React.FC<CenterProps> = ({ children }) => {
  return (
    <Center w='100%' h={{ base: '96px', md: '120px' }}>
      <ItemText fontSize={{ base: '20px', md: '24px' }}>{children}が存在しません</ItemText>
    </Center>
  );
};

export default ItemNotExistText;
