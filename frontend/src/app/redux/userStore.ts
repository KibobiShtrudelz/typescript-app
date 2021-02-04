import Cookies from "universal-cookie";
import {
  createAsyncThunk,
  SerializedError,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";

import { signin, fetchLoggedUser } from "../services/user/userServices";
import formatError, { ErrorMessagePayload } from "../../utils/formatError";
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
  data: { email: "" },
  error: "",
  loaded: false,
  loading: false,
};

const cookies = new Cookies();

const userSignIn: TThunk<User | ErrorMessagePayload, User> = createAsyncThunk(
  "user/sign-in",
  async (userData: User) => await signin(userData)
);

const fetchUser: TThunk<
  User | ErrorMessagePayload | { email: string } | undefined
> = createAsyncThunk("user/fetch-logged-user", async () => {
  try {
    if (cookies.get("jwt")?.length > 0) return await fetchLoggedUser();
    return { email: "" };
  } catch (error) {
    formatError(error);
  }
});

const reducer = createReducer(initialState, {
  // User signin
  [userSignIn.pending.type]: state => {
    state.loading = true;
  },
  [userSignIn.fulfilled.type]: (state, action: PayloadAction<User>) => {
    if (action.payload.error) {
      state.data.email = "";
      state.error = action.payload.error;
    } else {
      state.data = action.payload;
      state.error = "";
    }

    state.loaded = true;
    state.loading = false;
  },
  [userSignIn.rejected.type]: (
    state,
    action: PayloadAction<null, string, unknown, SerializedError>
  ) => {
    state.loaded = true;
    state.loading = false;
    state.error = action.error.message || "General error";
  },

  // User fetch
  [fetchUser.pending.type]: state => {
    state.loading = true;
  },
  [fetchUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
    state.data = action.payload;
    state.loaded = true;
    state.loading = false;
  },
  [fetchUser.rejected.type]: (
    state,
    action: PayloadAction<null, string, unknown, SerializedError>
  ) => {
    state.loaded = true;
    state.loading = false;
    state.error = action.error.message || "General error";
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
