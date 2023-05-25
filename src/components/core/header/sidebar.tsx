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
import { blueGrey } from "@mui/material/colors";
import { useRouter } from "next/router";

const Sidebar = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
}: SidebarProps) => {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    handleCloseUserMenu();
    logout();
  };

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
            <Avatar
              alt={user.name}
              sx={{
                bgcolor: blueGrey.A700,
                width: 30,
                height: 30,
                fontSize: 16,
              }}
            >
              {user.name[0]}
            </Avatar>
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
          <MenuItem key="recipes" onClick={() => router.push("/user/recipes")}>
            <Typography textAlign="center">My Recipes</Typography>
          </MenuItem>
          <MenuItem key="account" onClick={() => router.push("/user")}>
            <Typography textAlign="center">My Account</Typography>
          </MenuItem>
          <MenuItem key="logout" onClick={handleLogout}>
            <Typography textAlign="center">Log Out</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
};
export default Sidebar;
