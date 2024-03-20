import classes from "./AvailableRecipes.module.css";
import Card from "../../UI/Card";
import RecipeItem from "../RecipeItem/RecipeItem";
import { useEffect, useState } from "react";

const AvailableRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://recipeapp-b5683-default-rtdb.firebaseio.com/recipes.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();
        const loadedRecipes = [];

        for (const key in responseData) {
          loadedRecipes.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            ingredients: responseData[key].ingredients,
            instructions: responseData[key].instructions,
          });
        }

        setRecipes(loadedRecipes);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
        console.log(httpError);
      }
    };

    fetchRecipes();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <p>{httpError}</p>
      </section>
    );
  }

  const recipeList = recipes.map((recipe) => (
    <RecipeItem
      id={recipe.id}
      key={recipe.id}
      name={recipe.name}
      description={recipe.description}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      className={classes["recipe-item"]}
    />
  ));
  return (
    <section className={classes.recipe}>
      <Card>
        <ul>{recipeList}</ul>
      </Card>
    </section>
  );
};

export default AvailableRecipes;
