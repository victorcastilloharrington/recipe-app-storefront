import Recipes from "@components/recipes/";
import Hero from "@components/recipes/hero";
import ApiClient from "../services/api";

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

export default function Index(props: { recipes: [RecipesComponentProps] }) {
  return (
    <>
      <Hero />
      <Recipes {...props} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await ApiClient("recipe/recipes/");

  return { props: { recipes: data } };
}
