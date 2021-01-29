import {
  createAsyncThunk,
  // createAction,
  createReducer,
  PayloadAction,
  SerializedError,
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
  data: { email: "" },
  error: "",
  loaded: false,
  loading: false,
};

const cookies = new Cookies();

const userSignIn: TThunk<
  User | { errorMessage: string },
  User
> = createAsyncThunk(
  "user/sign-in",
  async (userData: User) => await signin(userData)
);

const fetchUser: TThunk<
  User | { email: string } | { errorMessage: string }
> = createAsyncThunk("user/fetch-logged-user", async () => {
  if (cookies.get("jwt")?.length > 0) {
    return await fetchLoggedUser();
  }

  return { email: "" };
});

const reducer = createReducer(initialState, {
  // User signin
  [userSignIn.pending.type]: state => {
    state.loading = true;
  },
  [userSignIn.fulfilled.type]: (state, action: PayloadAction<User>) => {
    if (action.payload.errorMessage) {
      state.data.email = "";
      state.error = action.payload.errorMessage;
    } else {
      state.data = action.payload;
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
