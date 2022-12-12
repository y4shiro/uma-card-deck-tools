import { AspectRatio, Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

import CardFrame from '@/components/CardFrame';
import { CardType } from '@/types/cards';

type Props = {
  cardRarity: CardType['card_rarity'];
  children: ReactNode;
};

const MultipleObserver: React.FC<Props> = ({ cardRarity, children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      {inView ? (
        children
      ) : (
        <CardFrame cardRarity={cardRarity}>
          <AspectRatio ratio={3 / 4} borderRadius='16'>
            <Box />
          </AspectRatio>
        </CardFrame>
      )}
    </div>
  );
};

export default MultipleObserver;
