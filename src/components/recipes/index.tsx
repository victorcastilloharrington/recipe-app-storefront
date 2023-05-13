import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Card from "./card";
import { Divider, Typography } from "@mui/material";
import { FC } from "react";

export interface GenericRecipeProps {
  name: string;
}
export interface RecipesComponentProps {
  id: number;
  title: string;
  time_minutes: number;
  price: string;
  image?: string;
  tags?: [GenericRecipeProps];
  Ingredients?: [GenericRecipeProps];
  link?: string;
}
const Recipes: FC<{ recipes: [RecipesComponentProps] }> = ({ recipes }) => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Divider sx={{ marginBottom: 8 }}>
          <Typography variant="h3">Newest Recipes</Typography>
        </Divider>
        <Grid container spacing={4}>
          {recipes.map((recipe) => (
            <Card
              id={recipe.id}
              key={recipe.id}
              title={recipe.title}
              tags={recipe.tags}
              image={recipe.image}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Recipes;
