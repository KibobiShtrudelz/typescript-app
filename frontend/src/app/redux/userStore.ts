import {
  createAsyncThunk,
  // createAction,
  createReducer,
  PayloadAction,
  // SerializedError,
} from "@reduxjs/toolkit";
import { signin, fetchLoggedUser } from "../services/user/userServices";
import { ApplicationState } from "../types/state";
import Cookies from "universal-cookie";
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

const cookies = new Cookies();

const userSignIn: TThunk<User | Error, User> = createAsyncThunk(
  "user/sign-in",
  async (userData: User) => await signin(userData)
);

const fetchUser: TThunk<User | Error, User> = createAsyncThunk(
  "user/fetch-logged-user",
  async () => cookies.get("jwt") && (await fetchLoggedUser())
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
  fetchUser,
};

const userStore = {
  actions,
  reducer,
};

export default userStore;

export type { State };
