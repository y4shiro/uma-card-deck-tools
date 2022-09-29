import { AspectRatio, Box } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

type Props = {
  card: CardType;
  imgSize: { card: { width: number; height: number }; type: number } | undefined;
  key?: number;
};

const Card: React.FC<Props> = ({ card, imgSize }) => {
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
          src={`w_${imgSize!.card.width},h_${imgSize!.card.height}/uma-support-card/card-images/${
            card.card_id
          }.png`}
          alt={`サポートカード "${card.card_name}" の画像`}
        />
      </AspectRatio>
      <Box position='absolute' top={{ base: '-2px', sm: '0px' }} right='0px'>
        <Image
          height={imgSize!.type}
          width={imgSize!.type}
          src={`uma-support-card/card-type-icons/${card.card_type}.png`}
          alt={`サポートカード "${card.card_name}" のタイプアイコン`}
        />
      </Box>
    </Box>
  );
};

export default Card;
