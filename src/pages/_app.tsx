import { ChakraProvider } from '@chakra-ui/react';
import type { AppPropsWithLayout } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </Provider>
  );
}

export default MyApp;
