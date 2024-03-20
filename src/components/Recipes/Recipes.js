import AvailableRecipes from "./AvailableRecipes/AvailableRecipes";
import AboutRecipes from "./AboutRecipes/AboutRecipes";
import AddRecipe from "./AddRecipe/AddRecipe";

const Recipes = () => {
  return (
    <>
      <AboutRecipes />
      <AddRecipe />
      <AvailableRecipes />
    </>
  );
};

export default Recipes;
