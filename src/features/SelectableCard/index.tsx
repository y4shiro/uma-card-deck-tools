import { AspectRatio, Box } from '@chakra-ui/react';

import Card from '@/components/Card';
import type { CardType } from '@/types/cards';

type Props = {
  card: CardType;
  imgSize: { card: { width: number; height: number }; type: number } | undefined;
};

const SelectableCard: React.FC<Props> = ({ card, imgSize }) => {
  return (
    <Box>
      SelectableCard
      <Card card={card} imgSize={imgSize} />
    </Box>
  );
};

export default SelectableCard;
