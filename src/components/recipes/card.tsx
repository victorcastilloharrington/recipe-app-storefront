import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

interface CardProps {
  id: number;
  enableButtons?: boolean;
  handleDeleteClick?: () => void;
  handleEditClick?: () => void;
}

const CardComponent = ({
  id,
  enableButtons,
  handleDeleteClick,
  handleEditClick,
}: CardProps) => {
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            sx={
              {
                // 16:9
              }
            }
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              Recipe Name
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the
              content.
            </Typography>
          </CardContent>
          {enableButtons && (
            <CardActions>
              <Button size="small">Delete</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          )}
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default CardComponent;
