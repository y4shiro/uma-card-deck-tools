import { ChakraProvider } from '@chakra-ui/react';
import type { AppPropsWithLayout } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';

import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </Provider>
  );
}

export default MyApp;
