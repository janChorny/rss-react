import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormInput } from 'models/models';

const formState: FormInput[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState: formState,
  reducers: {
    saveFormCards: (state, { payload }: PayloadAction<FormInput>) => {
      state.push(payload);
    },
  },
});

export const { saveFormCards } = formSlice.actions;
export default formSlice.reducer;
