import { AspectRatio, Box } from '@chakra-ui/react';

import Card from '@/components/Card';
import type { CardType } from '@/types/cards';

type Props = {
  card: CardType;
  imgSize: { card: { width: number; height: number }; type: number } | undefined;
};

const SelectableCard: React.FC<Props> = ({ card, imgSize }) => {
  const clickHandler = () => {
    console.log(card.card_id);
  };

  return (
    <Box cursor='pointer' _hover={{ opacity: 0.5 }} transition='0.25s' onClick={clickHandler}>
      <Card card={card} imgSize={imgSize} />
    </Box>
  );
};

export default SelectableCard;
