import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { CardType } from '@/types/cards';

const bgGradients = {
  R: 'linear(0deg, #8e9ab0, #fefefe)',
  SR: 'linear(0deg, #e2af38, #fff1cd)',
  SSR: 'linear(135deg, #fc9edd,#d356f5 30%, #60dbfb 55%,#81f8d3 75%, #dbfe65)',
};
const outerBorderColors = {
  R: '#bbb',
  SR: '#bfa763',
  SSR: '#95829d',
};

type Props = {
  cardRarity: CardType['card_rarity'];
  children: ReactNode;
};

const CardFrame: React.FC<Props> = ({ cardRarity, children }) => {
  return (
    <Box
      position='relative'
      p={{ base: '2px', md: '6px' }}
      bgGradient={bgGradients[cardRarity]}
      borderRadius={{ base: 8, md: 12 }}
      borderWidth='1px'
      borderColor={outerBorderColors[cardRarity]}
      shadow='md'
    >
      {children}
    </Box>
  );
};

export default CardFrame;
