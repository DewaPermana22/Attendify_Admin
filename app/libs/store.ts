import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import sidebarReducer from '../libs/features/sidebar/sidebarSlice';

// Konfigurasi Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sidebar'], // Hanya state sidebar yang akan disimpan
};

// Gabungkan reducers
const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Buat store Redux
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Untuk menghindari warning dari Redux Persist
    }),
});

// Redux Persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
