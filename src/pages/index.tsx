import Recipes from "@components/recipes/";
import Hero from "@components/recipes/hero";
import ApiClient from "../services/api";
import { RecipesComponentProps } from "@components/recipes/";

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
