import { Text, VStack } from '@chakra-ui/react';

const Contacts = (): JSX.Element => {
  const text = 'Twitter やメールなどの連絡先を追加';
  return (
    <VStack w='100%' p='4' bgColor='blue.100'>
      <Text>Contacts(連絡先)</Text>
      <Text>{text}</Text>
    </VStack>
  );
};

export default Contacts;
