import {
  createAsyncThunk,
  // createAction,
  createReducer,
  PayloadAction,
  // SerializedError,
} from "@reduxjs/toolkit";
import { createUser } from "../services/cmsService";
import User from "../types/user";
import { TThunk } from "./store";

type State = {
  data: User | null;
  error: Error | string | null;
};

const initialState: User = {
  jwt: "",
  email: "",
  username: "",
};

const userSignUp: TThunk<User, User> = createAsyncThunk(
  "user/signUp",
  async (userData: User) => await createUser(userData)
);

// TODO: направи default State type, включващ loading, loaded и error props
const reducer = createReducer(initialState, {
  [userSignUp.pending.type]: () => {},
  [userSignUp.fulfilled.type]: (state, action: PayloadAction<User>) => {
    state = action.payload;
  },
  [userSignUp.rejected.type]: () => {},
});

const actions = {
  userSignUp,
};

const userStore = {
  actions,
  reducer,
};

export default userStore;

export type { State };
