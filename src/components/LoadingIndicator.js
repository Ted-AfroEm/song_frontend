import React from "react";
import { useSelector } from "react-redux";

function LoadingIndicator() {
  const loading = useSelector((state) => state.songs.loading);

  if (!loading) {
    return null;
  }

  return <div>Loading...</div>;
}

export default LoadingIndicator;
