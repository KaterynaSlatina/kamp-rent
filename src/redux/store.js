import { combineReducers, configureStore } from "@reduxjs/toolkit";

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

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  kamps: kampsReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistConfig = {
//   key: "products",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   kamps: kampsReducer,
  //   favorites: persistedReducer,
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
