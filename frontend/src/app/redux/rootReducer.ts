import { combineReducers } from "@reduxjs/toolkit";
import { ApplicationState } from "../types/state";
import authFormStore from "./authFormStore";
import userStore from "./userStore";

const createRootReducer = () =>
  combineReducers<ApplicationState>({
    authForm: authFormStore.reducer,
    user: userStore.reducer,
  });

const rootReducer = createRootReducer();

export { rootReducer };
