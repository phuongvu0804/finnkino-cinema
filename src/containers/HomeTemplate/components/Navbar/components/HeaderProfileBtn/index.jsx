import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SUB_MENU } from "../../constants";

const HeaderProfileBtn = ({ data, setAnchorElUser, anchorElUser }) => {
  const navigate = useNavigate();

  const handleCloseUserMenu = (setting) => {
    if (setting.label === "Log out") {
      localStorage.removeItem("user");
    }

    setAnchorElUser(null);
    navigate(setting.to);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Profile">
        <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp">{data.hoTen.charAt(0)}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {SUB_MENU.map((setting, index) => (
          <MenuItem key={index} onClick={() => handleCloseUserMenu(setting)}>
            <Typography textAlign="center">{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default HeaderProfileBtn;
