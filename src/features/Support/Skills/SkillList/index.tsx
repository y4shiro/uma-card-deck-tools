import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';

import SkillItem from '../SkillItem';

import { EventSkill, TrainingSkill } from '@/types/cards';

type Props = {
  heading: string;
  skillLists:
    | {
        card_id: number;
        card_name: string;
        card_skills: EventSkill[] | TrainingSkill[];
      }[]
    | undefined;
};

const SkillList: React.FC<Props> = ({ heading, skillLists }) => {
  return (
    <VStack w='100%' p='4' gap='2' bgColor='blue.200'>
      <Heading as='h2' fontSize='2xl'>
        {heading}
      </Heading>

      <SimpleGrid w='100%' columns={{ base: 1, md: 2 }} gap={{ base: '2', md: '4' }}>
        {skillLists?.map((card) =>
          card.card_skills?.map((skill) => (
            <SkillItem
              key={skill.name}
              skillName={skill.name}
              rarity={skill.rarity}
              skillPt={skill.skill_pt}
              iconPath={skill.img_path}
              cardName={card.card_name}
            />
          )),
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default SkillList;
