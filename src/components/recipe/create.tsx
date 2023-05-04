import Heading from "@components/core/layout/heading";
import { Box } from "@mui/material";
import RecipeFormComponent from "./form";

const CreateRecipeComponent = () => {
  return (
    <Box
      sx={{
        marginY: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading text="Create New Recipe" />
      <RecipeFormComponent />
    </Box>
  );
};

export default CreateRecipeComponent;
