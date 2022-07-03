import { Container, Text, VStack } from '@chakra-ui/react';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';

import Contacts from '@/features/Contacts';
import Licence from '@/features/License';
import Terms from '@/features/Terms';
import { Layout } from '@/layouts/Layout';

const About: NextPageWithLayout = () => (
  <div>
    <Head>
      <title>About - ウマ娘サポカ編成ツール</title>
      <meta name='description' content='ウマ娘サポートカード編成ツール' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Container as='main' maxW='container.lg' bgColor='gray.100'>
      <VStack p='4'>
        <Text>About Page</Text>
        <Terms />
        <Licence />
        <Contacts />
      </VStack>
    </Container>
  </div>
);

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
