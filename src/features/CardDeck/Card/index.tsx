import { Box, chakra, GridItem, theme } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

const ChakraNextImage = chakra(Image);

type Props = { card: CardType; key: number };

const Card: React.FC<Props> = (props) => {
  let bgColor: string;

  switch (props.card.card_rarity) {
    case 'R':
      bgColor = theme.colors.gray[200];
      break;
    case 'SR':
      bgColor = theme.colors.yellow[400];
      break;
    case 'SSR':
      bgColor = theme.colors.purple[400];
      break;
  }

  return (
    <GridItem
      h='240px'
      w='180px'
      padding='8px'
      bgColor={bgColor}
      borderRadius='16'
      borderWidth='1px'
      borderColor='rgba(64,64,64, 0.2)'
      shadow='md'
    >
      <Box h='full' w='full' borderRadius='12' overflow='hidden' position='relative'>
        <ChakraNextImage
          layout='fill'
          objectFit='cover'
          priority
          src={`uma-support-card/card-images/${props.card.card_img_path}`}
          alt={`サポートカード "${props.card.card_name}" の画像`}
        />
      </Box>
    </GridItem>
  );
};

export default Card;
