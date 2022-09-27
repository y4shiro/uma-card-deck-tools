import { Box } from '@chakra-ui/react';
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
      bgColor='blue.100'
      sx={{
        '>span': { position: 'unset !important' },
        '.image': {
          position: 'relative !important',
          width: '100% !important',
          height: 'unset !important',
        },
      }}
    >
      <Image
        className='image'
        layout='fill'
        objectFit='contain'
        // placeholder='blur'
        // blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcXg8AAbMBGIpVIK8AAAAASUVORK5CYII='
        // style={{ transition: '0.2s' }}
        src={`w_120,h_180/uma-support-card/card-images/${card.card_img_path}`}
        alt={`サポートカード "${card.card_name}" の画像`}
      />
    </Box>
  );
};

export default Card;
