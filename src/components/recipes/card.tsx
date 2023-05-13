import * as React from "react";

import Grid from "@mui/material/Grid";

import { GenericRecipeProps } from "@pages";
import Link from "next/link";
import CardComponent from "@components/core/card";
interface CardProps {
  id: number;
  title: string;
  tags?: [GenericRecipeProps];
  image?: string;
  enableButtons?: boolean;
  handleDeleteClick?: () => void;
  handleEditClick?: () => void;
}

const RecipeCardComponent = ({
  id,
  title,
  tags,
  image,
  enableButtons,
  handleDeleteClick,
  handleEditClick,
}: CardProps) => {
  return (
    <Link href={`/recipe/${id}`}>
      <Grid item key={id} xs={12} sm={6} md={4}>
        <CardComponent id={id} title={title} tags={tags} image={image} />
      </Grid>
    </Link>
  );
};
export default RecipeCardComponent;
