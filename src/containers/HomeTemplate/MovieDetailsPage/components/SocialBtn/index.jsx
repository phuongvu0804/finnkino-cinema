import { Button, Typography } from "@mui/material";
import React from "react";

const SocialBtn = ({ data }) => {
  return (
    <Button
      variant="contained"
      size="small"
      className={`btn-wrapper movie-detail__desc-btn ${data.className}`}
      startIcon={data.icon}
    >
      <Typography sx={{ display: { xs: "none", lg: "block", xl: "block" } }}>
        {data.name}
      </Typography>
    </Button>
  );
};

export default SocialBtn;
