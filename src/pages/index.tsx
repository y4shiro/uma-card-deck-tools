import { Container } from '@chakra-ui/react';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';

import Support from '@/features/Support';
import { Layout } from '@/layouts/Layout';

const Home: NextPageWithLayout = () => (
  <div>
    <Head>
      <title>Top - ウマ娘サポカ編成ツール</title>
      <meta name='description' content='ウマ娘サポートカード編成ツール' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Container as='main' maxW='container.lg' bgColor='gray.100'>
      <Support />
    </Container>
  </div>
);

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
