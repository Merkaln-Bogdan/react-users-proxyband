import {
  createSlice,
  createEntityAdapter,
  // createAsyncThunk,
  // PayloadAction,
} from "@reduxjs/toolkit";
import { UserType } from "types/user.type";
import type { RootState } from "redux/store";

// We can use redux-thunk

// import { usersDataService } from "services";

// interface UserState {
//   loading: boolean;
//   error: string | null;
//   cities: UserType[];
// }

// const initialState = {
//   loading: false,
//   error: null,
//   cities: [],
// } as UserState;

// export const getUsers = createAsyncThunk(
//   "users/getUsers",
//   async (_, thunkApi) => {
//     try {
//       const response = await usersDataService.getAllUsers();
//       return response.data;
//     } catch (error: any) {
//       const message = error.message;
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

const usersAdapter = createEntityAdapter({
  selectId: (user: UserType) => user.id,
});

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  // initialState
  reducers: {
    setUsers(state, action) {
      usersAdapter.setAll(state, action.payload);
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(getUsers.pending, (state, action) => {
  //       state.loading = true;
  //     })
  //     .addCase(
  //       getUsers.fulfilled,
  //       (state, action: PayloadAction<UserType[]>) => {
  //         state.loading = false;
  //         state.cities = action.payload;
  //       }
  //     )
  //     .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
  //       state.error = action.payload;
  //     });
  // },
});

export const getState = (rootState: RootState) => rootState.users;

export const usersSelector = usersAdapter.getSelectors(
  (state: RootState) => state.users
);

export const { setUsers } = usersSlice.actions;
