export interface GenericRecipeProps {
  name: string;
}
export interface RecipesComponentProps {
  id: number;
  title: string;
  time_minutes: number;
  price: string;
  image?: string;
  tags?: [GenericRecipeProps];
  Ingredients?: [GenericRecipeProps];
  link?: string;
}

export interface RecipeCardProps {
  id: number;
  title: string;
  tags?: [GenericRecipeProps];
  image?: string;
}

export interface RecipeDetailPageProps extends RecipesComponentProps {
  description: string;
}