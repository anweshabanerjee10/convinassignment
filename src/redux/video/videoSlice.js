import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  history: [],
  modalOpen: false,
  color: "#329C89",
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.videos = [...state.videos, action.payload.video];
    },
    deleteVideo: (state, action) =>
      (state.videos = state.videos.filter(
        ({ id }) => id !== action.payload.id
      )),
    changeBucket: (state, action) => {
      state.videos = state.videos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            bucket: action.payload.bucket,
          };
        }
        return item;
      });
    },
  },
  addHistory: (state, action) => state.history.push(action.payload.history),
  changeColor: (state, action) => (state.color = action.payload.color),
});

export const selectVideos = (state) => state.video.videos;
export const selectHistory = (state) => state.video.history;
export const selectModalOpen = (state) => state.video.modalOpen;
export const selectColor = (state) => state.video.color;

export const { addVideo, deleteVideo, changeBucket, addHistory, changeColor } =
  videoSlice.actions;
export default videoSlice.reducer;
