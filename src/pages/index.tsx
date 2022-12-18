import { Box, Container } from '@chakra-ui/react';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';

import Support from '@/features/Support';
import { Layout } from '@/layouts/Layout';

const Home: NextPageWithLayout = () => (
  <Box w='100%' bgColor='gray.50'>
    <Head>
      <title>Top - ウマ娘サポカ編成ツール</title>
      <meta name='description' content='ウマ娘サポートカード編成ツール' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    {/* sm: 30em(480px), md: 40em(768px), lg: 62em(992px), xl: 80em(1280px) */}
    <Container
      as='main'
      w='100%'
      maxW='container.lg'
      pb={{ base: '64px', sm: '96px' }}
      px={{ base: 0, sm: 4 }}
    >
      <Support />
    </Container>
  </Box>
);

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
