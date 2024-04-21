import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { kampsReducer } from "./kampsSlice";
import { favoritesReducer } from "./favoritesSlice";

const persistConfig = {
  key: "products",
  storage,
};

const persistedReducer = persistReducer(persistConfig, kampsReducer);

export const store = configureStore({
  reducer: {
    kamps: persistedReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
