import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  videos: [],
  history: [],
  modalOpen: false,
  color: '#329C89',
  card: {
    name: '',
    videoId: '',
    id: '',
  },
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.videos = [...state.videos, action.payload.video]
    },
    deleteVideo: (state, action) => {
      state.videos = state.videos.filter(({ id }) => id !== action.payload.id)
    },
    changeBucket: (state, action) => {
      console.log(action)
      state.videos = state.videos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            bucket: action.payload.bucket,
          }
        }
        return item
      })
    },
    addHistory: (state, action) => {
      state.history = [...state.history, action.payload.history]
    },
    changeColor: (state, action) => {
      state.color = action.payload
    },
    setCard: (state, action) => {
      state.card = action.payload
    },
    setModalOpen: (state, action) => {
      state.modalOpen = true
    },
    setModalClose: (state, action) => {
      state.modalOpen = false
    },
  },
})

export const selectVideos = (state) => state.video.videos
export const selectHistory = (state) => state.video.history
export const selectModalOpen = (state) => state.video.modalOpen
export const selectColor = (state) => state.video.color
export const selectCard = (state) => state.video.card

export const {
  addVideo,
  deleteVideo,
  changeBucket,
  addHistory,
  changeColor,
  setModalClose,
  setModalOpen,
  setCard,
} = videoSlice.actions
export default videoSlice.reducer
