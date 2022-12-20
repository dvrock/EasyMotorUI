import {rootReducer} from '../redux/reducer/index';
import {configureStore} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
{reducer:persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
}
);
export const persistor = persistStore(store);
export default store