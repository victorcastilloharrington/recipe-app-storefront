import Box from "@mui/material/Box";

import Copyright from "./copyright";
import Logo from "../header/logo";
import { grey } from "@mui/material/colors";
import Socials from "./socials";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: grey.A200,
        p: 6,
        display: "flex",
        flexDirection: "column",
      }}
      component="footer"
      justifyContent="center"
      alignItems="center"
    >
      <Logo />
      <Socials />
      <Copyright />
    </Box>
  );
};

export default Footer;
