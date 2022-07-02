import { Container, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '@/components/Header';

const About: NextPage = () => (
  <div>
    <Head>
      <title>About - ウマ娘サポカ編成ツール</title>
      <meta name='description' content='ウマ娘サポートカード編成ツール' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />

    <Container as='main' maxW='container.lg' bgColor='gray.100'>
      <VStack p='4'>
        <Text>About Page</Text>
      </VStack>
    </Container>
  </div>
);

export default About;
