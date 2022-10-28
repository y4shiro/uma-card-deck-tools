import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import SkillItem from './SkillItem';

import { RootState } from '@/app/store';
import { useGetCardsQuery } from '@/services/card';

const Skills = (): JSX.Element => {
  const { data, error, isLoading } = useGetCardsQuery();
  const deck = useSelector((state: RootState) => state.cardDeck);
  const deckCardidLists = deck.filter((card) => card.cardId).flatMap((card) => card.cardId);

  const deckCardSkillsLists = data
    ?.filter((card) => deckCardidLists.includes(card.card_id))
    .map((card) => {
      return {
        card_id: card.card_id,
        card_name: card.card_name,
        event_skills: card.event_skills,
        training_skills: card.training_skills,
      };
    });

  return (
    <VStack w='100%' p='4' gap='4' bgColor='blue.100'>
      <Text fontSize='4xl'>Skills</Text>
      <VStack w='100%' p='4' bgColor='blue.200'>
        <Text fontSize='2xl'>イベント取得スキル</Text>
        {deckCardSkillsLists?.map((card) =>
          card.event_skills?.map((skill) => (
            <SkillItem
              key={skill.name}
              skillName={skill.name}
              skillPt={skill.skill_pt}
              cardName={card.card_name}
            />
          )),
        )}
      </VStack>

      <VStack w='100%' p='4' bgColor='blue.200'>
        <Text fontSize='2xl'>トレーニング取得スキル</Text>
        {deckCardSkillsLists?.map((card) =>
          card.training_skills?.map((skill) => (
            <SkillItem
              key={skill.name}
              skillName={skill.name}
              skillPt={skill.skill_pt}
              cardName={card.card_name}
            />
          )),
        )}
      </VStack>
    </VStack>
  );
};

export default Skills;
