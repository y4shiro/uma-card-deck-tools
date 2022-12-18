import { SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';

import SkillItem from '../SkillItem';
import ComponentHeading from '@/components/ComponentHeading';
import ItemNotExistText from '@/components/ItemNotExistText';

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
  // skillLists が undefined or null の場合は false を返す
  // また、skillItem のうちどれか 1 つでもスキルを所有している場合は true を返し、
  // 全ての skillItem にスキルが存在しない場合は false
  const hasSkills = skillLists?.some((skillItem) => skillItem.card_skills.length !== 0);

  return (
    <VStack w='100%' p={{ base: 2, md: 4 }}>
      <ComponentHeading>{heading}</ComponentHeading>

      {hasSkills ? (
        <SimpleGrid w='100%' p='2' columns={{ base: 1, md: 2 }} gap={{ base: '2', md: '4' }}>
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
      ) : (
        <ItemNotExistText>{heading}</ItemNotExistText>
      )}
    </VStack>
  );
};

export default SkillList;
