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
  selection: false,
  bufferCards: [],
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
      state.history = [...state.history, action.payload]
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
    addCardToBuffer: (state, action) => {
      if (!state.bufferCards.some((item) => item === action.payload)) {
        state.bufferCards = [...state.bufferCards, action.payload]
      }
    },
    removeCardFromBuffer: (state, action) => {
      state.bufferCards = state.bufferCards.filter(
        (card) => card !== action.payload,
      )
    },
    clearBuffer: (state) => {
      state.bufferCards = []
    },
    setSelectionOn: (state) => {
      state.selection = true
    },
    setSelectionOff: (state) => {
      state.selection = false
    },
  },
})

export const selectVideos = (state) => state.video.videos
export const selectHistory = (state) => state.video.history
export const selectModalOpen = (state) => state.video.modalOpen
export const selectColor = (state) => state.video.color
export const selectCard = (state) => state.video.card
export const selectBuffer = (state) => state.video.bufferCards
export const selectSelection = (state) => state.video.selection

export const {
  addVideo,
  deleteVideo,
  changeBucket,
  addHistory,
  changeColor,
  setModalClose,
  setModalOpen,
  setCard,
  addCardToBuffer,
  clearBuffer,
  setSelectionOff,
  setSelectionOn,
  removeCardFromBuffer,
} = videoSlice.actions
export default videoSlice.reducer
