import { AspectRatio, Box } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

type Props = { card: CardType; key?: number };

const Card: React.FC<Props> = ({ card }) => {
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

  return (
    <Box
      position='relative'
      p={{ base: '2px', md: '4px' }}
      bgGradient={bgGradients[card.card_rarity]}
      borderRadius={{ base: 8, md: 12 }}
      borderWidth='1px'
      borderColor={outerBorderColors[card.card_rarity]}
      shadow='md'
    >
      <AspectRatio overflow='hidden' borderRadius={{ base: 6, md: 10 }} ratio={3 / 4}>
        <Image
          layout='fill'
          objectFit='contain'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcXg8AAbMBGIpVIK8AAAAASUVORK5CYII='
          // style={{ transition: '0.2s' }}
          src={`w_120,h_160/uma-support-card/card-images/${card.card_img_path}`}
          alt={`サポートカード "${card.card_name}" の画像`}
        />
      </AspectRatio>
    </Box>
  );
};

export default Card;
