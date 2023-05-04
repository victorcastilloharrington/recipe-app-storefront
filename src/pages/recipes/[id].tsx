import Content from "@components/recipe/content";
import RecipeDetailHero from "@components/recipe/hero";
import Hero from "@components/recipes/hero";

import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Recipe = () => {
  return (
    <>
      <RecipeDetailHero />
      <Content />
    </>
  );
};

export default Recipe;
