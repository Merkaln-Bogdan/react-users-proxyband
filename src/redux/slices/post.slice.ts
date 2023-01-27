import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { PostType } from "types/posts.type";

import type { RootState } from "redux/store";

const postsAdapter = createEntityAdapter({
  selectId: (post: PostType) => post.id,
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    setPosts(state, action) {
      postsAdapter.setAll(state, action.payload);
    },
  },
});

export const getState = (rootState: RootState) => rootState.posts;

export const postsSelector = postsAdapter.getSelectors(
  (state: RootState) => state.posts
);

export const { setPosts } = postsSlice.actions;
