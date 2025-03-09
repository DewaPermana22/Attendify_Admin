import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import sidebarReducer from '../libs/features/sidebar/sidebarSlice';
import themeReducer from '../libs/features/themes/themesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sidebar', 'theme'],
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  theme : themeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
