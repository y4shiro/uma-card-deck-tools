import { chakra, GridItem, theme } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

const ChakraNextImage = chakra(Image);

type Props = { card: CardType; key: number };

const Card: React.FC<Props> = (props) => {
  let bdColor: string;

  switch (props.card.card_rarity) {
    case 'R':
      bdColor = theme.colors.gray[200];
      break;
    case 'SR':
      bdColor = theme.colors.yellow[400];
      break;
    case 'SSR':
      bdColor = theme.colors.purple[500];
      break;
  }

  return (
    <GridItem
      h='240px'
      w='180px'
      position='relative'
      overflow='hidden'
      borderColor={bdColor}
      borderWidth='6px'
      borderRadius='16'
      shadow='md'
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
