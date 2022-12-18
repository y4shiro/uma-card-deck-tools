import { Center } from '@chakra-ui/react';
import type { CenterProps } from '@chakra-ui/react';
import React from 'react';

import ItemText from '../TextItem';

const ItemNotExistText: React.FC<CenterProps> = ({ children }) => {
  return (
    <Center w='100%' h={{ base: 16, md: 32 }}>
      <ItemText fontSize={{ base: 18, md: 24 }}>{children}が存在しません</ItemText>
    </Center>
  );
};

export default ItemNotExistText;
