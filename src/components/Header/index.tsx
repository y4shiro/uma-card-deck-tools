import { HStack, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const Header = (): JSX.Element => {
  return (
    <HStack as='nav' w='100%' h='16' p='4' bgColor='green.500' justify='space-between'>
      <Text>ウマ娘サポートカード編成ツール α版</Text>
      <HStack gap='4'>
        <NextLink href='/' passHref>
          <Link>Top</Link>
        </NextLink>
        <NextLink href='/about' passHref>
          <Link>About</Link>
        </NextLink>
      </HStack>
    </HStack>
  );
};

export { Header };
