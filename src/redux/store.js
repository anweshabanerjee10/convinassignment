import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './video/videoSlice'

export default configureStore({
  reducer: {
    video: videoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
