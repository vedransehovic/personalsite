import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../moviestate";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <div>
      <h2>Movie Detail</h2>
    </div>
  );
};

export default MovieDetail;
