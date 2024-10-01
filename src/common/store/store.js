import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
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

// Persist konfigürasyonu
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

// Redux store'u oluşturuyoruz
export const store = configureStore({
  reducer: {
    auth: persistedReducer, // Persist edilmiş reducer kullanılıyor
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist aksiyonları için kontrolü devre dışı bırakıyoruz
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor oluşturuyoruz, bu store'un state'ini kalıcı hale getirir
export const persistor = persistStore(store);
