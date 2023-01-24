import { Button } from "@mui/material";
import React from "react";

const MovieOption = ({ data, isActiveOption, onChooseMovieOption }) => {
  return (
    <Button
      variant="text"
      className={data.id === isActiveOption ? "home-list__btn active" : "home-list__btn"}
      onClick={() => onChooseMovieOption(data.id)}
    >
      {data.name}
    </Button>
  );
};

export default MovieOption;
