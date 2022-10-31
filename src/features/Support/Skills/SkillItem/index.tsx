import { Box, Divider, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  skillName: string;
  rarity: 1 | 2 | 3 | 4 | 5;
  skillPt: number | null;
  cardName: string;
};

const SkillItem: React.FC<Props> = ({ skillName, rarity, skillPt, cardName }) => {
  const bgColors = {
    1: 'linear(90deg, #FCF3F2, #D9D7EB 50%, #C8C6DE 75%,#AAA9BE)', // 白
    2: 'linear(90deg, #FFFEEE, #F7D883 50%, #F2BA53)', // 金
    3: 'linear(90deg, #FCF3F2, #D9D7EB 50%, #C8C6DE 75%,#AAA9BE)', // 白
    4: 'linear(90deg, #E0FDD7, #BDF2F8 25%, #B4CEF7 50%, #E4B7ED 75%, #EFABE7)', // 虹
    5: 'linear(90deg, #E0FDD7, #BDF2F8 25%, #B4CEF7 50%, #E4B7ED 75%, #EFABE7)', // 虹
  };
  const borderColors = {
    1: '#9290B2',
    2: '#EEA348',
    3: '#9290B2',
    4: '#E45DAD',
    5: '#E45DAD',
  };

  return (
    <HStack
      w='100%'
      px='4'
      py='2'
      gap={{ base: '2', md: '4' }}
      borderRadius='8'
      border='1px'
      borderColor={borderColors[rarity]}
      bgGradient={bgColors[rarity]}
      shadow='md'
    >
      <Box boxSize='48px' bgColor='gray.300'>
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
