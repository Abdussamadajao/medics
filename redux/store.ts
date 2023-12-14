import { categoriesApi } from "./queries/categories";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "./slice/authSlice";
import { doctorsApi } from "./queries/doctors";
import { hospitalApi } from "./queries/hospitals";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["auth", "categories", "doctors"],
};

const appReducer = combineReducers({
  auth: authSlice,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [doctorsApi.reducerPath]: doctorsApi.reducer,
  [hospitalApi.reducerPath]: hospitalApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    categoriesApi.middleware,
    doctorsApi.middleware,
    hospitalApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
