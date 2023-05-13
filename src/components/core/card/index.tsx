import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { GenericRecipeProps } from "@components/recipes/";
import { Tag } from "@mui/icons-material";
import Link from "next/link";
interface CardProps {
  id: number;
  title: string;
  tags?: [GenericRecipeProps];
  image?: string;
  enableButtons?: boolean;
  handleDeleteClick?: () => void;
  handleEditClick?: () => void;
}

const CardComponent = ({
  id,
  title,
  tags,
  image,
  enableButtons,
  handleDeleteClick,
  handleEditClick,
}: CardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image ? image : "/hero_background.jpg"}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {tags?.map((tag) => (
            <Chip
              icon={<Tag />}
              size="small"
              variant="outlined"
              label={tag.name}
              key={tag.name}
              onClick={() => {}}
            />
          ))}
        </CardContent>
        {enableButtons && (
          <CardActions>
            <Button size="small">Delete</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        )}
      </CardActionArea>
    </Card>
  );
};
export default CardComponent;
