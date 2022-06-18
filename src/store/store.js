import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/user-slice';
import todoSlice from '../features/todo/todo-slice';
import postSlice from '../features/post/post-slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice,
  },
});
