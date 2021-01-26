import {
  createAsyncThunk,
  // createAction,
  createReducer,
  PayloadAction,
  // SerializedError,
} from "@reduxjs/toolkit";
import { createUser } from "../services/cmsService";
import { ApplicationState } from "../types/state";
import { User } from "../types/user";
import { TThunk } from "./store";

type State = {
  data: User;
  loaded: boolean;
  loading: boolean;
  error: Error | string | null;
};

const initialState: ApplicationState["user"] = {
  data: {
    email: "",
  },
  error: "",
  loaded: false,
  loading: false,
};

const userSignUp: TThunk<User, User> = createAsyncThunk(
  "user/sign-up",
  async (userData: User) => await createUser(userData)
);

const reducer = createReducer(initialState, {
  [userSignUp.pending.type]: state => {
    state.loading = true;
  },
  [userSignUp.fulfilled.type]: (state, action: PayloadAction<User>) => {
    state.data = action.payload;
    state.loaded = true;
  },
  [userSignUp.rejected.type]: (state, action) => {
    state.loaded = true;
    state.loading = false;
    state.error = action.error.message;
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
