import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./logo";
import { DesktopNavBarProps, MobileNavBarProps } from "@typedefs/core";

const pages = ["Ingredients", "Tags"];

export const DesktopNavBar = ({
  handleIngredientsModal,
  handleTagsModal,
}: DesktopNavBarProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          onClick={handleIngredientsModal}
          sx={{ mt: 2, display: "block" }}
        >
          Ingredients
        </Button>
        <Button onClick={handleTagsModal} sx={{ mt: 2, display: "block" }}>
          Tags
        </Button>
      </Box>
    </>
  );
};

export const MobileNavbar = ({
  handleCloseNavMenu,
  handleOpenNavMenu,
  anchorElNav,
  handleIngredientsModal,
  handleTagsModal,
}: MobileNavBarProps) => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
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
          <MenuItem onClick={handleIngredientsModal}>
            <Typography textAlign="center">Ingredients</Typography>
          </MenuItem>
          <MenuItem onClick={handleTagsModal}>
            <Typography textAlign="center">Tags</Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
        <Logo />
      </Box>
    </>
  );
};
