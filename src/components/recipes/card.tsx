import * as React from "react";

import Grid from "@mui/material/Grid";
import Link from "next/link";
import CardComponent from "@components/core/card";
import { RecipeCardProps } from "@typedefs/recipe";

const RecipeCardComponent = ({ id, title, tags, image }: RecipeCardProps) => {
  return (
    <Link href={`/recipe/${id}`}>
      <Grid item key={id} xs={12} sm={6} md={4}>
        <CardComponent id={id} title={title} tags={tags} image={image} />
      </Grid>
    </Link>
  );
};
export default RecipeCardComponent;
