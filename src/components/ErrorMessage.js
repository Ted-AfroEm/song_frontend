import React from "react";
import { useSelector } from "react-redux";

function ErrorMessage() {
  const error = useSelector((state) => state.songs.error);

  if (!error) {
    return null;
  }

  return <div>Error: {error}</div>;
}

export default ErrorMessage;
