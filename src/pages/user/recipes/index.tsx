import Recipes from "@components/recipes";
import { Box, Container } from "@mui/material";

const UserRecipesPage = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Recipes />
      </Container>
    </Box>
  );
};

export default UserRecipesPage;
