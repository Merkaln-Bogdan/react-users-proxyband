import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { UserType } from "types/user.type";

import type { RootState } from "redux/store";

const usersAdapter = createEntityAdapter({
  selectId: (user: UserType) => user.id,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    setUsers(state, action) {
      usersAdapter.setAll(state, action.payload);
    },
  },
});

export const getState = (rootState: RootState) => rootState.users;

export const usersSelector = usersAdapter.getSelectors(
  (state: RootState) => state.users
);

export const { setUsers } = usersSlice.actions;
