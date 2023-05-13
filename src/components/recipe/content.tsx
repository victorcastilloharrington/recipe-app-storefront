import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

const RecipeContent: FC<{ description: string }> = ({ description }) => {
  return (
    <Box marginY={10}>
      <Container maxWidth="md" fixed>
        <Typography variant="body1">{description}</Typography>
      </Container>
    </Box>
  );
};

export default RecipeContent;
