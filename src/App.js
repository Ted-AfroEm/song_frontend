import { useState } from "react";
import SongCreate from "./components/SongCreate";
import SongList from "./components/SongList";

function App() {
  const [songs, setSongs] = useState([
    {
      _id: "65cc9457f190a1f9ba4eea9d",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      genre: "Rock",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eea9e",
      title: "Rhapsody in Blue",
      artist: "George Gershwin",
      album: "Rhapsody in Blue",
      genre: "Classical",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eea9f",
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "÷ (Divide)",
      genre: "Pop",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eeaa0",
      title: "Shape of My Heart",
      artist: "Sting",
      album: "Ten Summoner's Tales",
      genre: "Soft Rock",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eeaa1",
      title: "Heart-Shaped Box",
      artist: "Nirvana",
      album: "In Utero",
      genre: "Grunge",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eeaa2",
      title: "Love of My Life",
      artist: "Queen",
      album: "A Night at the Opera",
      genre: "Rock",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eeaa3",
      title: "Love Will Tear Us Apart",
      artist: "Joy Division",
      album: "Unknown Pleasures",
      genre: "Post-Punk",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eeaa4",
      title: "Apart",
      artist: "The Cure",
      album: "Wish",
      genre: "Gothic Rock",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eeaa5",
      title: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      genre: "Pop",
      __v: 0,
    },
    {
      _id: "65cc9457f190a1f9ba4eeaa6",
      title: "Billie's Bounce",
      artist: "Charlie Parker",
      album: "The Original Bird",
      genre: "Jazz",
      __v: 0,
    },
  ]);
  const editBookById = (id, updatedSong) => {
    const updateSongs = songs.map((song) => {
      if (song._id === id) {
        return { ...song, ...updatedSong };
      }
      return song;
    });
    setSongs(updateSongs);
  };
  const deleteSongById = (id) => {
    const updatedSongs = songs.filter((song) => {
      return song._id !== id;
    });
    setSongs(updatedSongs);
  };
  const createSong = ({ title, artist, album, genre }) => {
    console.log("Need to add song with: ", { title, artist, album, genre });
    const updatedSongs = [
      ...songs,
      { _id: Math.random, title, artist, album, genre },
    ];
    setSongs(updatedSongs);
    console.log(songs);
  };
  return (
    <div>
      <SongCreate onCreate={createSong} />
      <hr />
      <SongList songs={songs} onDelete={deleteSongById} onEdit={editBookById} />
    </div>
  );
}

export default App;
