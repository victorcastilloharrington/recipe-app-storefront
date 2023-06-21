import { SentimentVeryDissatisfiedTwoTone } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";

const Custom404 = () => {
  return (
    <Box
      sx={{
        marginY: 32,
        marginX: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "650px",
      }}
    >
      <SentimentVeryDissatisfiedTwoTone
        color="primary"
        sx={{ fontSize: "72px", marginX: 2 }}
      />
      <Typography justifyContent="center" variant="h6">
        We could not find the page you were looking for. We're working to fix
        the issue, in the meantime, why not go to the{" "}
        <Link href="/">Main Page</Link>
      </Typography>
    </Box>
  );
};

export default Custom404;
