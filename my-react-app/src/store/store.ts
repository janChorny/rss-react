import { configureStore } from '@reduxjs/toolkit';
import formSlice from './reducer/formSlice';
import searchSlice from './reducer/searchSlice';

export const store = configureStore({
  reducer: {
    formReducer: formSlice,
    searchReducer: searchSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
