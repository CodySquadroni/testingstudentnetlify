import { useState } from "react";
import classes from "./RecipeItem.module.css";

const AddRecipe = (props) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const showRecipeDetails = (event) => {
    event.preventDefault();
    setShowRecipe(true);
  };

  const hideRecipeDetails = (event) => {
    event.preventDefault();
    setShowRecipe(false);
  };

  return (
    <li className={classes.recipe}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        {!showRecipe && (
          <button onClick={showRecipeDetails} className={classes.button}>
            View Recipe
          </button>
        )}
        {showRecipe && (
          <div>
            <h5>Ingredients</h5>
            <div>{props.ingredients}</div>
            <h5>Instructions</h5>
            <div>{props.instructions}</div>
            <button onClick={hideRecipeDetails} className={classes.button}>
              Close
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default AddRecipe;
