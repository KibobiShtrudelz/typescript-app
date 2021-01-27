import {
  createAsyncThunk,
  // createAction,
  createReducer,
  PayloadAction,
  // SerializedError,
} from "@reduxjs/toolkit";
import { signin } from "../services/user/userServices";
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

const userSignIn: TThunk<User | null, User> = createAsyncThunk(
  "user/sign-in",
  async (userData: User) => await signin(userData)
);

const reducer = createReducer(initialState, {
  [userSignIn.pending.type]: state => {
    state.loading = true;
  },
  [userSignIn.fulfilled.type]: (state, action: PayloadAction<User>) => {
    state.data = action.payload;
    state.loaded = true;
    state.loading = false;
  },
  [userSignIn.rejected.type]: (state, action) => {
    state.loaded = true;
    state.loading = false;
    state.error = action.error.message;
  },
});

const actions = {
  userSignIn,
};

const userStore = {
  actions,
  reducer,
};

export default userStore;

export type { State };
