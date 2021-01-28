import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import {
  configureStore,
  ThunkAction,
  AsyncThunk,
  Action,
} from "@reduxjs/toolkit";

import { ApplicationState } from "../types/state";
import authFormStore from "./authFormStore";
import userStore from "./userStore";

export const store = configureStore({
  reducer: {
    authForm: authFormStore.reducer,
    user: userStore.reducer,
    toastr: toastrReducer,
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

export type TThunk<TPayload, TArg = void> = AsyncThunk<
  TPayload,
  TArg,
  ThunkOptions
>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = <TReturn>(
  selector: (state: ApplicationState) => TReturn
): TReturn => useSelector<ApplicationState, TReturn>(selector, shallowEqual);
