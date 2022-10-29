import { configureStore }  from '@reduxjs/toolkit';
import { counterReducer } from '../Reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, counterReducer);
  
  export const Store = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== 'production',
      middleware: [thunk]
  })
  export const persistor = persistStore(Store);