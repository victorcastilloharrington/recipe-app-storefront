import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AuthComponent from "@components/auth";
import { SidebarProps } from "@typedefs/core";
import { useAuth } from "@hooks/useAuth";

const Sidebar = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
}: SidebarProps) => {
  const { user, logout } = useAuth();

  if (!user)
    return (
      <Box sx={{ flexGrow: 0 }}>
        <AuthComponent />
      </Box>
    );
  else
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={user.name} src="/static/images/avatar/1.jpg" />
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
          <MenuItem key="recipes" onClick={handleCloseUserMenu}>
            <Typography textAlign="center">My Recipes</Typography>
          </MenuItem>
          <MenuItem key="Account" onClick={handleCloseUserMenu}>
            <Typography textAlign="center">My Account</Typography>
          </MenuItem>
          <MenuItem key="logout" onClick={logout}>
            <Typography textAlign="center">Log Out</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
};
export default Sidebar;
