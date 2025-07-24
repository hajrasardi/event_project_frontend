// src/lib/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

// Fungsi pembuat store (jika nanti mau pakai testing atau multiple store)
export const makeStore = () =>
  configureStore({
    reducer: {
      userReducer,
    },
  });

// Langsung buat store untuk dipakai di Provider
export const store = makeStore();

// Define types
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
