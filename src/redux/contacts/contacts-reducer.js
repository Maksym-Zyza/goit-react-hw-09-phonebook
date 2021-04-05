import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./contacts-actions";

const items = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.delContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.filterContacts]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.delContactRequest]: () => true,
  [actions.delContactSuccess]: () => false,
  [actions.delContactError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
