import { HStack, Link, Text } from '@chakra-ui/react';

const Header = (): JSX.Element => {
  return (
    <HStack as='nav' w='100%' h='16' p='4' bgColor='green.500' justify='space-between'>
      <Text>Header Components</Text>
      <Link>About</Link>
    </HStack>
  );
};

export default Header;
