import { useState } from "react";
function SongEdit({ song, onEdit }) {
  const [editedSong, setEditedSong] = useState(song);
  console.log(editedSong);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedSong({
      ...editedSong,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New editedSong", editedSong);
    onEdit(song._id, editedSong);

    // onCreate(editedSong);
    // setEditedSong({
    //   title: "",
    //   artist: "",
    //   album: "",
    //   genre: "Pop",
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        value={editedSong.title}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <label htmlFor="artist">Artist:</label>
      <br />
      <input
        type="text"
        id="artist"
        name="artist"
        value={editedSong.artist}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <label htmlFor="album">Album:</label>
      <br />
      <input
        type="text"
        id="album"
        name="album"
        value={editedSong.album}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <label htmlFor="genre">Genre:</label>
      <br />
      <select
        id="genre"
        name="genre"
        value={editedSong.genre}
        onChange={handleChange}
      >
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Hip Hop">Hip Hop</option>
        <option value="Electronic">Electronic</option>
        <option value="Jazz">Jazz</option>
        <option value="Classical">Classical</option>
      </select>
      <br />
      <br />

      <input type="submit" value="Save" />
    </form>
  );
}

export default SongEdit;
