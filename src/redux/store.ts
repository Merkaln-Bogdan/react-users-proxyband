import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "./slices/user.slice";
import { postsSlice } from "./slices/post.slice";
import { albumsSlice } from "./slices/album.slice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
    albums: albumsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
