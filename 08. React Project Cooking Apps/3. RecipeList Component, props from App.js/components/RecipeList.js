import { Link } from 'react-router-dom';

// Styles
import './RecipeList.css';

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} 🥘</p>
          {/* small snippets for methods*/}
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Detail Resep 🔛</Link>
        </div>
      ))}
    </div>
  );
}
