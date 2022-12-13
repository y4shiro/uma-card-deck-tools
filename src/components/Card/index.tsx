import { AspectRatio, Box } from '@chakra-ui/react';
import Image from 'next/image';

import CardFrame from '../CardFrame';
import type { CardType, ImgSize } from '@/types/cards';

type Props = {
  card: CardType;
  imgSize: ImgSize;
};

const Card: React.FC<Props> = ({ card, imgSize }) => {
  return (
    <CardFrame cardRarity={card.card_rarity}>
      <AspectRatio overflow='hidden' borderRadius={{ base: 6, md: 10 }} ratio={3 / 4}>
        <Image
          layout='fill'
          objectFit='contain'
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
          src={`uma-support-card/icons/${card.card_type}.png`}
          alt={`サポートカード "${card.card_name}" のタイプアイコン`}
        />
      </Box>
    </CardFrame>
  );
};

export default Card;
