import { Link, useLocation } from "react-router-dom";

// Material UI
import { Stack, Avatar, Typography } from "@mui/material";

import FinnkinoLogo from "@/assets/images/header-logo.png";

const Card = ({ children }) => {
  const { pathname } = useLocation();

  const cardTitle = pathname === "/auth/login" ? "Log In" : "Register";

  return (
    <Stack direction="column" alignItems="center" spacing={1} p={3} bgcolor="#fff">
      <Link to="/">
        <Avatar alt="Finnkino logo" src={FinnkinoLogo} sx={{ width: 60, height: 60 }} />
      </Link>
      <Typography component="h1" variant="h5" fontSize={25} fontWeight={700} color="#FFC800">
        {cardTitle}
      </Typography>
      {children}
    </Stack>
  );
};

export default Card;
