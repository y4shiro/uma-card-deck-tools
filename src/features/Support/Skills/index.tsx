import { Heading, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import SkillList from './SkillList';

import { RootState } from '@/app/store';
import { useGetCardsQuery } from '@/services/card';

const Skills = (): JSX.Element => {
  const { data, error, isLoading } = useGetCardsQuery();
  const deck = useSelector((state: RootState) => state.cardDeck);
  const deckCardidLists = deck.filter((card) => card.cardId).flatMap((card) => card.cardId);

  const cardEventSkills = data
    ?.filter((card) => deckCardidLists.includes(card.card_id))
    .map((card) => {
      return {
        card_id: card.card_id,
        card_name: card.card_name,
        card_skills: card.event_skills,
      };
    });

  const cardTrainingSkills = data
    ?.filter((card) => deckCardidLists.includes(card.card_id))
    .map((card) => {
      return {
        card_id: card.card_id,
        card_name: card.card_name,
        card_skills: card.training_skills,
      };
    });

  return (
    <VStack w='100%' py='2' px={{ base: '0', md: '2' }} gap='4' bgColor='blue.100'>
      <Heading fontSize='4xl'>Skills</Heading>
      <SkillList heading={'イベント取得スキル'} skillLists={cardEventSkills} />
      <SkillList heading={'トレーニング取得スキル'} skillLists={cardTrainingSkills} />
    </VStack>
  );
};

export default Skills;
