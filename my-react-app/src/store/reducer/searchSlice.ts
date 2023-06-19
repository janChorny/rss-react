import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const searchState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchState,
  reducers: {
    saveSearchResults: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
});

export const getSearchValue = (state: RootState) => state.searchReducer.searchValue;
export const { saveSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
