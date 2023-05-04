import CreateRecipeComponent from "@components/recipe/create";
import { Box, Container } from "@mui/material";

const CreateRecipePage = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <CreateRecipeComponent />
      </Container>
    </Box>
  );
};

export default CreateRecipePage;
