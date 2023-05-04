import * as React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Divider, Paper } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const RecipeDetailHero = () => {
  return (
    <Box
      sx={{
        py: 12,
        backgroundImage: `url("/recipe_hero.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4 }}>
          <Typography variant="h3" textAlign="center">
            Recipe Title
          </Typography>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            justifyContent="center"
          >
            <Box
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <AccessTime />
              <Typography>Item 1</Typography>
            </Box>
            <Box
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <AccessTime />
              <Typography>Item 1</Typography>
            </Box>
            <Box
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <AccessTime />
              <Typography>Item 1</Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default RecipeDetailHero;
