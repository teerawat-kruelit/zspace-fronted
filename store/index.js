import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
const { composeWithDevTools } = require("redux-devtools-extension");
import modal from "./sliceModal";

const combinedReducer = combineReducers({
  modal,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: composeWithDevTools,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
