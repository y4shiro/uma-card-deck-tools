import { Text, VStack } from '@chakra-ui/react';

const Terms = (): JSX.Element => {
  const text = '規約のテキストをここに追加';
  return (
    <VStack w='100%' p='4' bgColor='blue.100'>
      <Text>Terms(規約)</Text>
      <Text>{text}</Text>
    </VStack>
  );
};

export default Terms;
