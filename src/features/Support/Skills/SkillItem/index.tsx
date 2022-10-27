import { Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  skillName: string;
  cardName: string;
};

const SkillItem: React.FC<Props> = ({ skillName, cardName }) => {
  return (
    <Text>
      {cardName}:{skillName}
    </Text>
  );
};

export default SkillItem;
