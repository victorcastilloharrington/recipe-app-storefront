import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Card from "./card";
import Hero from "./hero";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ingredients = ["a", "b", "c", "d"];

const Recipes = () => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Hero />
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
