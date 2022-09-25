import { Box, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Card from '../Card';
import type { CardType } from '@/types/cards';
import { supabase } from '@/utils/supabaseClient';

const CardSelectModal = (): JSX.Element => {
  return (
    <Box bgColor='blue.100'>
      <p>hello</p>
      CardSelectModal
    </Box>
  );
};

export default CardSelectModal;
