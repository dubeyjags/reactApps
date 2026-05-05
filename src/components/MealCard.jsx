import React from "react";

const RecipeCard = ({ meal }) => {
  // Extract ingredients + measures dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="cards">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="recipe-image"
      />

      <div className="recipe-content">
        <h2 className="title">{meal.strMeal}</h2>

        <div className="meta">
          <span>{meal.strCategory}</span>
          <span>{meal.strArea}</span>
        </div>

        <div className="tags">
          {meal.strTags?.split(",").map((tag, i) => (
            <span key={i} className="tag">
              #{tag}
            </span>
          ))}
        </div>

        <h4>Ingredients</h4>
        <ul className="ingredients">
          {ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h4>Instructions</h4>
        <p className="instructions">
          {meal.strInstructions.slice(0, 200)}...
        </p>

        <div className="actions">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Watch Recipe ▶
          </a>

          <a
            href={meal.strSource}
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;