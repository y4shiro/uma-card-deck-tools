import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

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
      };
    });

  return (
    <VStack w='100%' bgColor='blue.100'>
      <Text>Skills</Text>
      {deckCardSkillsLists?.map((card) =>
        card.event_skills?.map((skill) => (
          <Text key={skill.name}>
            {card.card_name}:{skill.name}
          </Text>
        )),
      )}
    </VStack>
  );
};

export default Skills;
