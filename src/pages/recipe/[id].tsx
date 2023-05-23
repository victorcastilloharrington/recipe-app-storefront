import RecipeContent from "@components/recipe/content";
import RecipeDetailHero from "@components/recipe/hero";
import { GetServerSideProps } from "next";
import ApiClient from "../../services/api";
import { RecipeDetailPageProps } from "@typedefs/recipe";

const RecipeDetailPage = (props: { recipe: RecipeDetailPageProps }) => {
  return (
    <>
      <RecipeDetailHero
        title={props.recipe.title}
        time={props.recipe.time_minutes}
        price={props.recipe.price}
        image={props.recipe.image}
      />
      <RecipeContent
        description={props.recipe.description}
        title={props.recipe.title}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  recipe: RecipeDetailPageProps;
}> = async (context) => {
  const id = context.params?.id;

  const data = await ApiClient(`recipe/recipes/${id}/`);

  return { props: { recipe: data } };
};

export default RecipeDetailPage;
