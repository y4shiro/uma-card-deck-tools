import { Center, Divider, HStack, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import ItemText from '@/components/TextItem';

type Props = {
  skillName: string;
  rarity: 1 | 2 | 3 | 4 | 5;
  skillPt: number | null;
  iconPath: string;
  cardName: string;
};

const SkillItem: React.FC<Props> = ({ skillName, rarity, skillPt, iconPath, cardName }) => {
  const bgColors = {
    1: 'linear-gradient(90deg, #FCF3F2, #D9D7EB 50%, #C8C6DE 75%,#AAA9BE)', // 白
    2: 'linear-gradient(90deg, #FFFEEE, #F7D883 50%, #F2BA53)', // 金
    3: 'linear-gradient(90deg, #FCF3F2, #D9D7EB 50%, #C8C6DE 75%,#AAA9BE)', // 白
    4: 'linear-gradient(90deg, #E0FDD7, #BDF2F8 25%, #B4CEF7 50%, #E4B7ED 75%, #EFABE7)', // 虹
    5: 'linear-gradient(90deg, #E0FDD7, #BDF2F8 25%, #B4CEF7 50%, #E4B7ED 75%, #EFABE7)', // 虹
  };
  const borderColors = {
    1: 'linear-gradient(90deg, #d1c6dc, #8d8aae)',
    2: 'linear-gradient(90deg, #F7DB81, #EEA146)',
    3: 'linear-gradient(90deg, #d1c6dc, #8d8aae)',
    4: 'linear-gradient(90deg, #88F180, #A2CDE1 25%, #969FF2 50%, #B68BEC 75%, #EA88CE)',
    5: 'linear-gradient(90deg, #88F180, #A2CDE1 25%, #969FF2 50%, #B68BEC 75%, #EA88CE)',
  };
  const dividerColor = '#653B21';

  return (
    <HStack
      w='100%'
      px='2'
      py='1'
      gap={{ base: '0', md: '2' }}
      borderRadius='16'
      background={`${bgColors[rarity]} padding-box, ${borderColors[rarity]} border-box`}
      border='2px solid transparent'
      fontSize={{ base: '12px', md: '16px' }}
      shadow='md'
    >
      <Center boxSize={{ base: '48px', md: '64px' }}>
        <Image
          width='64px'
          height='64px'
          src={`/uma-support-card/skill-icons/${iconPath}.png`}
          alt='スキルのアイコン'
        />
      </Center>

      <VStack w='100%' spacing='1' divider={<StackDivider borderColor={dividerColor} />}>
        <HStack w='100%'>
          <ItemText>{skillName}</ItemText>
          <Spacer />
          {skillPt && <ItemText>{skillPt}Pt</ItemText>}
        </HStack>

        <ItemText w='100%' noOfLines={[1]}>
          {cardName}
        </ItemText>
      </VStack>
    </HStack>
  );
};

export default SkillItem;
