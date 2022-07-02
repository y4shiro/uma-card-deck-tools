import { Text, VStack } from '@chakra-ui/react';

const Licence = (): JSX.Element => {
  const text = 'ライセンス関係のテキストをここに追加';
  return (
    <VStack w='100%' p='4' bgColor='blue.100'>
      <Text>License notation(ライセンス表記)</Text>
      <Text>{text}</Text>
    </VStack>
  );
};

export default Licence;
