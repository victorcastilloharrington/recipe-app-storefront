import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Divider, Typography } from "@mui/material";

const UserRecipes = () => {
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Divider sx={{ marginBottom: 8 }}>
          <Typography variant="h3">Newest Recipes</Typography>
        </Divider>
        <Grid container spacing={4}>
          {/* {cards.map((card) => (
            <Card id={card} key={card} />
          ))} */}
        </Grid>
      </Container>
    </>
  );
};

export default UserRecipes;
