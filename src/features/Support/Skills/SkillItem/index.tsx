import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  skillName: string;
  skillPt: number | null;
  cardName: string;
};

const SkillItem: React.FC<Props> = ({ skillName, skillPt, cardName }) => {
  return (
    <HStack w='480px' p='4' borderRadius='8' bgColor='white'>
      <Box boxSize='48px' bgColor='gray.200'>
        icon
      </Box>

      <VStack w='100%' alignContent='start'>
        <Text>{cardName}</Text>

        <HStack>
          <Text>{skillName}</Text>
          {skillPt && <Text>SkillPoint:{skillPt}</Text>}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default SkillItem;
