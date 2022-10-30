import { Box, Divider, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  skillName: string;
  rarity: 1 | 2 | 3 | 4 | 5;
  skillPt: number | null;
  cardName: string;
};

const SkillItem: React.FC<Props> = ({ skillName, rarity, skillPt, cardName }) => {
  return (
    <HStack
      w='100%'
      px='4'
      py='2'
      gap={{ base: '2', md: '4' }}
      borderRadius='8'
      bgColor='white'
      shadow='md'
    >
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
