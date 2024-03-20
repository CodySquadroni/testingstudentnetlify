import { useState, useRef } from "react";
import classes from "./RecipeForm.module.css";

const isEmpty = (value) => value.trim() === "";

const RecipeForm = (props) => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const ingredientsInputRef = useRef();
  const instructionsInputRef = useRef();

  const [formInputValid, setFormInputValid] = useState({
    name: true,
    description: true,
    ingredients: true,
    instructions: true,
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;
    const enteredInstructions = instructionsInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredDescriptionValid = !isEmpty(enteredDescription);
    const enteredIngredientsValid = !isEmpty(enteredIngredients);
    const enteredInstructionsValid = !isEmpty(enteredInstructions);

    setFormInputValid({
      name: enteredNameValid,
      description: enteredDescriptionValid,
      ingredients: enteredIngredientsValid,
      instructions: enteredInstructionsValid,
    });

    const formValid =
      enteredNameValid &&
      enteredDescriptionValid &&
      enteredIngredientsValid &&
      enteredInstructionsValid;

    if (!formValid) {
      return;
    }

    const recipe = {
      name: enteredName,
      description: enteredDescription,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
    };
    console.log(recipe);

    async function addRecipeHandler(recipe) {
      const response = await fetch(
        "https://recipeapp-b5683-default-rtdb.firebaseio.com/recipes.json",
        {
          method: "POST",
          body: JSON.stringify(recipe),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    addRecipeHandler(recipe);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={formInputValid.name ? "" : classes.invalidInput}>
        <label htmlFor="name">Recipe Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValid.name && (
          <p className={classes.invalid}>Please enter a valid recipe name.</p>
        )}
      </div>
      <div className={formInputValid.description ? "" : classes.invalidText}>
        <label htmlFor="description">Description</label>
        <textarea id="description" ref={descriptionInputRef} />
        {!formInputValid.description && (
          <p className={classes.invalid}>Please enter a valid description.</p>
        )}
      </div>
      <div className={formInputValid.ingredients ? "" : classes.invalidText}>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea id="ingredients" ref={ingredientsInputRef} />
        {!formInputValid.ingredients && (
          <p className={classes.invalid}>Please enter valid ingredients.</p>
        )}
      </div>
      <div className={formInputValid.instructions ? "" : classes.invalidText}>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" ref={instructionsInputRef} />
        {!formInputValid.instructions && (
          <p className={classes.invalid}>Please enter valid instructions.</p>
        )}
      </div>
      <button type="submit" value="submit" className={classes["button-submit"]}>
        Add Recipe
      </button>
      <button
        type="button"
        className={classes["button-cancel"]}
        onClick={props.onCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default RecipeForm;
