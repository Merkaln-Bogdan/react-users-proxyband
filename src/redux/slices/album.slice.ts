import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { AlbumType } from "types/posts.type";

import type { RootState } from "redux/store";

const albumsAdapter = createEntityAdapter({
  selectId: (albums: AlbumType) => albums.id,
});

export const albumsSlice = createSlice({
  name: "albums",
  initialState: albumsAdapter.getInitialState(),
  reducers: {
    setAlbums(state, action) {
      albumsAdapter.setAll(state, action.payload);
    },
  },
});

export const getState = (rootState: RootState) => rootState.albums;

export const albumsSelector = albumsAdapter.getSelectors(
  (state: RootState) => state.albums
);

export const { setAlbums } = albumsSlice.actions;
