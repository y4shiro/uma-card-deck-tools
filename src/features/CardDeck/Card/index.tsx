import { Box, GridItem, theme } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

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
      position='relative'
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
        position='relative'
        h='full'
        w='full'
        borderRadius='16'
        borderWidth='1px'
        borderColor='#ccc'
        overflow='hidden'
      >
        <Image
          quality={'100'}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcXg8AAbMBGIpVIK8AAAAASUVORK5CYII='
          style={{ transition: '0.2s' }}
          src={`w_180,h_240/uma-support-card/card-images/${props.card.card_img_path}`}
          alt={`サポートカード "${props.card.card_name}" の画像`}
        />
        {/* <Box w='full' h='full' bgColor='blackAlpha.500'></Box> */}
      </Box>

      <Box position='absolute' top='0' right='0'>
        <Image
          height='44px'
          width='44px'
          src={`uma-support-card/card-type-icons/${props.card.card_type}.png`}
          alt={`サポートカード "${props.card.card_name}" のタイプアイコン`}
        />
      </Box>

      <Box position='absolute' top='0' left='8px'>
        <Image
          height='44px'
          width='48px'
          quality={100}
          src={`uma-support-card/card-rarity-icons/${props.card.card_rarity}.png`}
          alt={`サポートカード "${props.card.card_name}" のレアリティアイコン`}
        />
      </Box>
    </GridItem>
  );
};

export default Card;
