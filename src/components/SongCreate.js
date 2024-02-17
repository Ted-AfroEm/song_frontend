import { useState } from "react";

function SongCreate({ onCreate }) {
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "Pop",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSong({
      ...newSong,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newSong);
    setNewSong({
      title: "",
      artist: "",
      album: "",
      genre: "Pop",
    });
  };

  return (
    <div>
      <h2>Add Song</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={newSong.title}
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
          value={newSong.artist}
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
          value={newSong.album}
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
          value={newSong.genre}
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

        <input type="submit" value="Add Song" />
      </form>
    </div>
  );
}

export default SongCreate;
