import { Link, useNavigate } from "react-router-dom";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";

// Material UI
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Components
import Image from "@/components/Image";
import images from "@/assets/images";

import "./style.scss";
import { MENU_LIST } from "./constants";
import HeaderProfileBtn from "./components/HeaderProfileBtn";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const USER = JSON.parse(localStorage.getItem("user"));
    setUser(USER);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //Render menu
  const renderMenuTabletMobile = () => {
    return MENU_LIST.map((item, index) => (
      <MenuItem key={index} onClick={handleCloseNavMenu} className="main-header__navbar-item">
        <Link to={item.to}>
          <Typography className="main-header__navbar-item-name" textAlign="center">
            {item.name}
          </Typography>
        </Link>
      </MenuItem>
    ));
  };

  const renderMenuPC = () => {
    return MENU_LIST.map((item, index) => (
      <Link key={index} to={item.to}>
        <Button
          className="main-header__navbar-item"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {item.name}
        </Button>
      </Link>
    ));
  };

  //Check if user is signed in
  const renderProfile = () => {
    return (
      <HeaderProfileBtn data={user} setAnchorElUser={setAnchorElUser} anchorElUser={anchorElUser} />
    );
  };

  return (
    <AppBar id="main-header" position="static">
      <Container className="main-header__wrapper" maxWidth="xl">
        <Toolbar className="main-header__toolbar" disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image className="main-header__logo" src={images.logo} />
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="main-header__sidebar-icon" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {renderMenuTabletMobile()}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image className="main-header__logo" src={images.logo} />
          </Typography>
          <Box
            className="main-header__navbar-list"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {renderMenuPC()}
          </Box>

          {/* Render action buttons if not sign in */}
          {user ? (
            renderProfile()
          ) : (
            <>
              <Link to="/auth/login" className="main-header__navbar-btn-wrapper">
                <Button className="main-header__navbar-btn">
                  <span className="hide-on-mobile">Log in</span>
                  <FontAwesomeIcon className="btn__right-icon" icon={faSignIn} />
                </Button>
              </Link>
              <Link to="/auth/register" className="main-header__navbar-btn-wrapper">
                <Button className="main-header__navbar-btn">
                  <span className="hide-on-mobile">Register</span>
                  <FontAwesomeIcon className="btn__right-icon" icon={faUser} />
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
