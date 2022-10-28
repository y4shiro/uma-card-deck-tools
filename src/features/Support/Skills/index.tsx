import { Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
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
    <VStack w='100%' py='2' px={{ base: '0', md: '2' }} gap='4' bgColor='blue.100'>
      <Heading fontSize='4xl'>Skills</Heading>

      <VStack w='100%' p='4' gap='2' bgColor='blue.200'>
        <Heading as='h2' fontSize='2xl'>
          イベント取得スキル
        </Heading>

        <SimpleGrid w='100%' columns={{ base: 1, md: 2 }} gap={{ base: '2', md: '4' }}>
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
        </SimpleGrid>
      </VStack>

      <VStack w='100%' p='4' gap='2' bgColor='blue.200'>
        <Heading as='h2' fontSize='2xl'>
          トレーニング取得スキル
        </Heading>

        <SimpleGrid w='100%' columns={{ base: 1, md: 2 }} gap={{ base: '2', md: '4' }}>
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
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default Skills;
