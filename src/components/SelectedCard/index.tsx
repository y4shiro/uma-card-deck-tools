import { AspectRatio, Box } from '@chakra-ui/react';
import Image from 'next/image';

import type { CardType } from '@/types/cards';

type Props = {
  card?: CardType;
  imgSize?: { card: { width: number; height: number }; type: number } | undefined;
  key?: number;
};

const SelectedCard: React.FC<Props> = ({ card, imgSize }) => {
  if (card) return <Box>カード有り</Box>;
  return <Box>カードなし</Box>;
};

export default SelectedCard;
