import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { GenericRecipeProps } from ".";
import { Tag } from "@mui/icons-material";
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
