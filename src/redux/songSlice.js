import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  statistics: {
    totalSongs: 0,
    totalAlbums: 0,
    totalArtists: 0,
    // Add more statistics as needed
  },
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // addSong(state, action) {
    //   state.songs.push(action.payload);
    //   state.statistics.totalSongs++;
    //   state.statistics.totalAlbums += action.payload.album ? 1 : 0;
    //   state.statistics.totalArtists += action.payload.artist ? 1 : 0;
    //   // Update other statistics as needed
    // },
    // Add other reducers as needed
    fetchSongsRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    fetchSongsSuccess(state, action) {
      state.loading = false;
      state.songs = action.payload.data;
      state.message = action.payload.message;
    },
    fetchSongsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addSongRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addSongSuccess(state, action) {
      state.loading = false;
      state.songs.push(action.payload.data);
      state.message = action.payload.message;
    },
    addSongFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteSongSuccess: (state, action) => {
      state.loading = false;
      state.songs = state.songs.filter(
        (song) => song._id !== action.payload.data._id
      );
      state.message = action.payload.message;
    },
    deleteSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  // addSong,
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  addSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

export default songSlice.reducer;
