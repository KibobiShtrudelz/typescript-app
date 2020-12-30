import { combineReducers } from "@reduxjs/toolkit";
import { ApplicationState } from "../types/state";
import userStore from "./userStore";

const createRootReducer = () =>
  combineReducers<ApplicationState>({
    user: userStore.reducer,
  });

const rootReducer = createRootReducer();

export { rootReducer };
