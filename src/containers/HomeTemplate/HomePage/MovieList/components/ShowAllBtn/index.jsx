import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const ShowAllBtn = () => {
  return (
    <Button
      variant="contained"
      size="small"
      className="btn-wrapper btn-filled movie-list__carousel-btn"
    >
      Show all
      <FontAwesomeIcon icon={faAngleDoubleRight} className="movie-list__carousel-btn-icon" />
    </Button>
  );
};

export default ShowAllBtn;
