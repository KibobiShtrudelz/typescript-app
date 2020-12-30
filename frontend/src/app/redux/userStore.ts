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
};

const userSignUp: TThunk<User, User> = createAsyncThunk(
  "user/signUp",
  async (userData: User) => {
    const res = await createUser(userData);

    if (res.errorMessage) {
      return res as { errorMessage: string };
    } else {
      return res;
    }
  }
);

const reducer = createReducer(initialState, {
  [userSignUp.fulfilled.type]: (state, action: PayloadAction<User>) => {
    state = action.payload;
  },
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
