import { Box, Grid, Text, VStack } from '@chakra-ui/react';

const Status = (): JSX.Element => {
  const status = ['1', '2', '3', '4'];

  return (
    <VStack w='100%' bgColor='blue.100'>
      <Text>Status</Text>
      {status.map((s, index) => (
        <Text key={index}>{s}</Text>
      ))}
    </VStack>
  );
};

export default Status;
