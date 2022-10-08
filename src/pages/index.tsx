import { Container, Text, VStack } from '@chakra-ui/react';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';

import CardDeck from '@/features/CardDeck';
import Skills from '@/features/Skills';
import Status from '@/features/Status';
import Test from '@/features/Test';
import { Layout } from '@/layouts/Layout';

const Home: NextPageWithLayout = () => (
  <div>
    <Head>
      <title>Top - ウマ娘サポカ編成ツール</title>
      <meta name='description' content='ウマ娘サポートカード編成ツール' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Container as='main' maxW='container.lg' bgColor='gray.100'>
      <VStack p='4'>
        <CardDeck />
        <Status />
        <Skills />
        <Text>hello</Text>
        <Test />
      </VStack>
    </Container>
  </div>
);

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
