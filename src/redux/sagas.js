import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  addSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
} from "./songSlice";
import { fetchSongs, addSong, deleteSong } from "../api/api";

function* fetchSongsApi() {
  try {
    const response = yield call(fetchSongs);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function* fetchSongsSaga() {
  try {
    const songs = yield call(fetchSongsApi);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    console.log(error);
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSongApi(payload) {
  try {
    const response = yield call(addSong, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function* addSongSaga(action) {
  try {
    const addedSong = yield call(addSongApi, action.payload);
    yield put(addSongSuccess(addedSong));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* deleteSongApi(payload) {
  try {
    const response = yield call(deleteSong, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function* deleteSongSaga(action) {
  try {
    const deletedSong = yield call(deleteSongApi, action.payload);
    yield put(deleteSongSuccess(deletedSong));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
  yield takeLatest(addSongRequest.type, addSongSaga);
  yield takeLatest(deleteSongRequest.type, deleteSongSaga);
}
