import { Button, Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/Header';
import CardDeck from '@/features/CardDeck';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Top - ウマ娘サポカ編成ツール</title>
      <meta name='description' content='ウマ娘サポートカード編成ツール' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />

    <main>
      <Center>
        <CardDeck />
        <Button>Chakra UI Button</Button>
        <Text>hello</Text>
      </Center>
    </main>
  </div>
);

export default Home;
