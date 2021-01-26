import { createAction, createReducer } from "@reduxjs/toolkit";

type State = {
  isVisible: boolean;
};

const initialState: State = {
  isVisible: false,
};

const toggleAuthForm = createAction("auth-form/toggle");

const reducer = createReducer(initialState, builder => {
  builder.addCase(toggleAuthForm, state => {
    state.isVisible = !state.isVisible;
  });
});

const actions = { toggleAuthForm };

const authFormStore = {
  reducer,
  actions,
};

export default authFormStore;

export type { State };
