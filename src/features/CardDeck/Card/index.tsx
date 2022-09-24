import { Box, chakra, GridItem, theme } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

const ChakraNextImage = chakra(Image);

type Props = { card: CardType; key: number };

const Card: React.FC<Props> = (props) => {
  // 後ほど定数定義のファイルに分割する
  let bgGradient: string;
  let outerBorderColor: string;

  switch (props.card.card_rarity) {
    case 'R':
      bgGradient = 'linear(0deg, #8e9ab0, #fefefe)';
      outerBorderColor = '#bbb';
      break;
    case 'SR':
      bgGradient = 'linear(0deg, #e2af38, #fff1cd)';
      outerBorderColor = '#bfa763';
      break;
    case 'SSR':
      bgGradient = 'linear(135deg, #fc9edd,#d356f5 30%, #60dbfb 55%,#81f8d3 75%, #dbfe65)';
      outerBorderColor = '#95829d';
      break;
  }

  return (
    <GridItem
      h='240px'
      w='180px'
      padding='6px'
      bgGradient={bgGradient}
      borderRadius='20'
      borderWidth='1px'
      borderColor={outerBorderColor}
      shadow='md'
    >
      <Box
        h='full'
        w='full'
        borderRadius='16'
        borderWidth='1px'
        borderColor='#ccc'
        overflow='hidden'
        position='relative'
      >
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
