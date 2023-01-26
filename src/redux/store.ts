import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "./slices/user.slice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
