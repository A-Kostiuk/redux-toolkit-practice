import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// https://jsonplaceholder.typicode.com/posts
const initialState = {
  posts: [],
};

const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(res.data));
  },
);

const removePostsById = createAsyncThunk(
  'posts/removePostsById',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(removePost(id));
  },
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log('getPosts fulfilled'),
    [getPosts.pending]: () => console.log('getPosts pending'),
    [getPosts.rejected]: () => console.log('getPosts rejected'),
    [removePostsById.fulfilled]: () => console.log('removePostsById fulfilled'),
    [removePostsById.pending]: () => console.log('removePostsById pending'),
    [removePostsById.rejected]: () => console.log('removePostsById rejected'),
  },
});

export { getPosts, removePostsById };
export const { setPosts, removePost } = postSlice.actions;
export default postSlice.reducer;
