import { Center, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

type Props = { card: CardType; key: number };

const Card: React.FC<Props> = (props) => {
  return (
    <GridItem h='240px' w='180px' borderRadius='16' bgColor='gray.400'>
      <Center h='100%' w='100%'>
        <Image
          width={180}
          height={240}
          src={`uma-support-card/card-images/${props.card.card_img_path}`}
          alt='サポートカードの画像'
        />
      </Center>
    </GridItem>
  );
};

export default Card;
