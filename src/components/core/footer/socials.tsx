import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import { Facebook, Instagram, Mail, Twitter } from "@mui/icons-material";

const Socials = () => {
  return (
    <Box marginTop={4}>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Follow us on our socials!
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton color="primary" aria-label="Facebook">
          <Facebook />
        </IconButton>
        <IconButton color="primary" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton color="primary" aria-label="Instagram">
          <Instagram />
        </IconButton>
        <IconButton color="primary" aria-label="Email Us">
          <Mail />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Socials;
