import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import NextLink from "next/link";
import { Link } from "@mui/material";
import { FC } from "react";

const RecipeContent: FC<{ description: string; title: string }> = ({
  description,
  title,
}) => {
  return (
    <Box marginTop={5} marginBottom={10}>
      <Container maxWidth="md" fixed>
        <Box marginY={4}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              component={NextLink}
              underline="hover"
              color="inherit"
              href="/"
            >
              Home
            </Link>
            <Typography color="text.primary">{title}</Typography>
          </Breadcrumbs>
        </Box>
        <Typography variant="h3" align="center" gutterBottom>
          Recipe Instructions
        </Typography>
        <Typography component="body" variant="h6">
          {description}
        </Typography>
      </Container>
    </Box>
  );
};

export default RecipeContent;
