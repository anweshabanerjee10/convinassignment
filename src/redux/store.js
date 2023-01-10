import { configureStore, combineReducers } from '@reduxjs/toolkit'
import videoReducer from './video/videoSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({ video: videoReducer })
const persistConfig = {
  key: 'persisit-config',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
export default store
