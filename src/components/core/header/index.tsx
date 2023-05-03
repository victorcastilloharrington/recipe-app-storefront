import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Sidebar from "./sidebar";
import { DesktopNavBar, MobileNavbar } from "./navbar";
import Logo from "./logo";
import Modal from "../modal";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [openIngredients, setOpenIngredients] = React.useState<boolean>(false);

  const [openTags, setOpenTags] = React.useState<boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleIngredientsModal = () => {
    setOpenTags(false);
    setOpenIngredients(!openIngredients);
  };

  const handleTagsModal = () => {
    setOpenIngredients(false);
    setOpenTags(!openTags);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="default" sx={{ py: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <Logo />
            </Box>
            <MobileNavbar
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
              handleIngredientsModal={handleIngredientsModal}
              handleTagsModal={handleTagsModal}
            />
            <Sidebar
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
            />
          </Box>
        </Toolbar>
        <DesktopNavBar
          handleIngredientsModal={handleIngredientsModal}
          handleTagsModal={handleTagsModal}
        />
      </Container>
      <Modal
        open={openIngredients}
        handleClose={handleIngredientsModal}
        title="Ingredients"
      >
        Ingredients
      </Modal>
      <Modal open={openTags} handleClose={handleTagsModal} title="Tags">
        TAGS
      </Modal>
    </AppBar>
  );
}
export default ResponsiveAppBar;
