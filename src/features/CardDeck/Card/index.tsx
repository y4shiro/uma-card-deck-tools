import { chakra, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

const ChakraNextImage = chakra(Image);

type Props = { card: CardType; key: number };

const Card: React.FC<Props> = (props) => {
  return (
    <GridItem
      h='240px'
      w='180px'
      position='relative'
      overflow='hidden'
      borderColor='#F9DD7D'
      borderWidth='6px'
      borderRadius='16'
    >
      <ChakraNextImage
        layout='fill'
        objectFit='cover'
        priority
        src={`uma-support-card/card-images/${props.card.card_img_path}`}
        alt='サポートカードの画像'
      />
    </GridItem>
  );
};

export default Card;
