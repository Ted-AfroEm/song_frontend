import SongShow from "./SongShow";
function SongList({ songs, onDelete, onEdit }) {
  const renderedSongs = songs.map((song) => {
    return (
      <SongShow
        key={song._id}
        song={song}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });
  return <div>{renderedSongs}</div>;
}

export default SongList;
