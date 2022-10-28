import { Box, Divider, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  skillName: string;
  skillPt: number | null;
  cardName: string;
};

const SkillItem: React.FC<Props> = ({ skillName, skillPt, cardName }) => {
  return (
    <HStack w='480px' p='4' gap='4' borderRadius='8' bgColor='white'>
      <Box boxSize='48px' bgColor='gray.200'>
        icon
      </Box>

      <VStack w='100%' divider={<Divider />}>
        <HStack w='100%'>
          <Text>{skillName}</Text>
          <Spacer />
          {skillPt && <Text>{skillPt}Pt</Text>}
        </HStack>

        <Text w='100%'>{cardName}</Text>
      </VStack>
    </HStack>
  );
};

export default SkillItem;
