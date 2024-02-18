import axiosInstance from "./axiosInstance";

export const fetchSongs = () => {
  return axiosInstance.get("/songs");
};

export const addSong = (songData) => {
  return axiosInstance.post("/songs", songData);
};

export const deleteSong = (songId) => {
  return axiosInstance.delete(`/songs/${songId}9`);
};
