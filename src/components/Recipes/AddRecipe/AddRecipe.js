import { useState } from "react";

import RecipeForm from "../RecipeForm/RecipeForm";
import classes from "./AddRecipe.module.css";

const AddRecipe = () => {
  const [showForm, setShowForm] = useState(false);

  const showAddForm = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  const hideAddForm = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <div className={classes.add}>
      {!showForm && (
        <button className={classes.button} onClick={showAddForm}>
          Add Recipe
        </button>
      )}
      {showForm && (
        <div className={classes.form}>
          <RecipeForm onCancel={hideAddForm} />
        </div>
      )}
    </div>
  );
};

export default AddRecipe;
