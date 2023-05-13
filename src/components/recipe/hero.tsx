import * as React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider, Paper } from "@mui/material";
import { AccessTime, AttachMoney } from "@mui/icons-material";

interface RecipeDetailHeroProps {
  title: string;
  time: number;
  price: string;
  image?: string;
}

const RecipeDetailHero: React.FC<RecipeDetailHeroProps> = ({
  title,
  time,
  price,
  image,
}) => {
  return (
    <Box
      sx={{
        py: 12,
        backgroundImage: `url("${image ? image : "/recipe_hero.jpg"}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4 }}>
          <Typography variant="h3" textAlign="center">
            {title}
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
              <AccessTime color="primary" />
              <Typography>{time}</Typography>
            </Box>
            <Box
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <AttachMoney color="primary" />
              <Typography>{price}</Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default RecipeDetailHero;
