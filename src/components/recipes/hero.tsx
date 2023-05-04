import * as React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        py: 12,
        backgroundImage: `url("/recipe_hero.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Paper elevation={4} sx={{ p: 4 }}>
              <Typography variant="h3">Ideas for Everyday Cooking</Typography>
              <Typography variant="subtitle1" gutterBottom marginBottom={2}>
                At Shared Recipes we collect recipes from users from all across
                the world. However fancy or simple, you can find them or if you
                are feeling creative, why not share your recipes with the world?
              </Typography>
              <Button variant="contained">Create a Recipe</Button>
            </Paper>
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
