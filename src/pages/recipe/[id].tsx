import RecipeContent from "@components/recipe/content";
import RecipeDetailHero from "@components/recipe/hero";
import { GetServerSideProps } from "next";
import { RecipesComponentProps } from "..";
import ApiClient from "../../services/api";
import { FC } from "react";

export interface RecipeDetailPageProps extends RecipesComponentProps {
  description: string;
}

const RecipeDetailPage = (props: { recipe: RecipeDetailPageProps }) => {
  return (
    <>
      <RecipeDetailHero
        title={props.recipe.title}
        time={props.recipe.time_minutes}
        price={props.recipe.price}
      />
      <RecipeContent description={props.recipe.description} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  recipe: RecipeDetailPageProps;
}> = async (context) => {
  const id = context.params?.id;

  const data = await ApiClient(`recipe/recipes/${id}`);
  console.log(data);

  return { props: { recipe: data } };
};

export default RecipeDetailPage;
