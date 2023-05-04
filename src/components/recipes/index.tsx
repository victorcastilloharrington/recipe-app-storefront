import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Card from "./card";
import Hero from "./hero";
import { Divider, Typography } from "@mui/material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Recipes = () => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Divider sx={{ marginBottom: 8 }}>
          <Typography variant="h3">Newest Recipes</Typography>
        </Divider>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Card id={card} key={card} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Recipes;
