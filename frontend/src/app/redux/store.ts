import {
  configureStore,
  ThunkAction,
  Action,
  AsyncThunk,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ApplicationState } from "../types/state";
import userStore from "./userStore";

export const store = configureStore({
  reducer: {
    user: userStore.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

type ThunkOptions = {
  state: ApplicationState;
};

type TThunk<TPayload, TArg = void> = AsyncThunk<TPayload, TArg, ThunkOptions>;

type AppDispatch = typeof store.dispatch;

export type { AppDispatch, TThunk };

export const useAppDispatch = () => useDispatch<AppDispatch>();
