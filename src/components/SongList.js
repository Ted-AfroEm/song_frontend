import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSongsRequest } from "../redux/songSlice";
import { useSelector } from "react-redux";
import SongShow from "./SongShow";
import ErrorMessage from "./ErrorMessage";
import LoadingIndicator from "./LoadingIndicator";

function SongList({ onDelete, onEdit }) {
  const dispatch = useDispatch();

  const songs = useSelector((state) => state.songs.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, []);

  return (
    <div>
      <LoadingIndicator />
      <ErrorMessage />
      {songs.map((song) => {
        return (
          <SongShow
            key={song._id}
            song={song}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
}

export default SongList;
