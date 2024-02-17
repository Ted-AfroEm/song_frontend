import { useState } from "react";
import { Box, Heading, Text, Button } from "rebass";
import SongEdit from "./SongEdit";

function SongShow({ song, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(song._id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
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
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </Box>
  );
  if (showEdit) {
    content = <SongEdit song={song} onEdit={onEdit} />;
  }
  return <>{content}</>;
}

export default SongShow;
