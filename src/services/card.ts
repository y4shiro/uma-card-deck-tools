import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import type { CardType } from './../types/cards';
import { supabase } from './../utils/supabaseClient';

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCards: builder.query<CardType[], void>({
      queryFn: async () => {
        const { data } = await supabase.from('view_cards_json').select('*');
        return data ? { data } : { data: [] };
      },
    }),
  }),
});

export const { useGetCardsQuery } = cardApi;
