import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from "./auth/authSlice";
import { storageReducer } from './storage/storageSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const authRed = persistReducer(persistConfig, authReducer);



const store = configureStore({
  reducer: {
    auth: authRed,
    storage: storageReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export default dataStore = {store, persistor };