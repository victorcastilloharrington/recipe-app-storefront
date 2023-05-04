import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      marginTop={2}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Victor C. Harrington
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
