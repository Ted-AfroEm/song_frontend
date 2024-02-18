import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Heading, Text, Button } from "rebass";
import SongEdit from "./SongEdit";
import { deleteSongRequest } from "../redux/songSlice";

function SongShow({ song, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    // onDelete(song._id);
    dispatch(deleteSongRequest(song._id));
  };
  const handleEditClick = (id, newSong) => {
    setShowEdit(!showEdit);
    onEdit(id, newSong);
  };

  const handleSubmit = (id, newSong) => {
    setShowEdit(false);
    onEdit(id, newSong);
  };

  let content = (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <Heading fontSize={3} mb={2}>
        {song.title} by {song.artist}
      </Heading>
      <Text>Album: {song.album}</Text>
      <Text>Genre: {song.genre}</Text>
      <Button onClick={handleEditClick}>Edit</Button>
      <Button onClick={handleDeleteClick}>Delete</Button>
    </Box>
  );
  if (showEdit) {
    content = <SongEdit onSubmit={handleSubmit} song={song} />;
  }
  return <>{content}</>;
}

export default SongShow;
