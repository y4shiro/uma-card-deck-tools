import { Box, Grid, Text, VStack } from '@chakra-ui/react';

const Skills = (): JSX.Element => {
  const skills = ['1', '2', '3', '4'];

  return (
    <VStack w='100%' bgColor='blue.100'>
      <Text>Skills</Text>
      {skills.map((s, index) => (
        <Text key={index}>{s}</Text>
      ))}
    </VStack>
  );
};

export default Skills;
