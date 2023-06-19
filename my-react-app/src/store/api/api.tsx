import { GetSearchArgs, Result, Root } from 'models/models';
import { baseApi } from '../../utils/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseApi }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Result[], GetSearchArgs>({
      query: (arg) => ({
        url: 'character',
        params: { name: arg.search },
      }),
      transformResponse: (response: Root) => response.results,
    }),
  }),
});

export const { useGetCharactersQuery } = cardApi;
export const charactersReducer = cardApi.reducer;
