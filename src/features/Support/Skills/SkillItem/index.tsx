import { Box, Center, Divider, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  skillName: string;
  rarity: 1 | 2 | 3 | 4 | 5;
  skillPt: number | null;
  iconPath: string;
  cardName: string;
};

const SkillItem: React.FC<Props> = ({ skillName, rarity, skillPt, iconPath, cardName }) => {
  const fontColor = '#653B21';
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

  return (
    <HStack
      w='100%'
      px='4'
      py='2'
      gap='2'
      borderRadius='16'
      background={`${bgColors[rarity]} padding-box, ${borderColors[rarity]} border-box`}
      border='2px solid transparent'
      fontWeight='bold'
      textColor={fontColor}
      textShadow='0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff'
      shadow='md'
    >
      <Center boxSize='64px'>
        <Image
          width='64px'
          height='64px'
          src={`/uma-support-card/skill-icons/${iconPath}.png`}
          alt='スキルのアイコン'
        />
      </Center>

      <VStack w='100%' divider={<Divider borderColor={fontColor} />}>
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
