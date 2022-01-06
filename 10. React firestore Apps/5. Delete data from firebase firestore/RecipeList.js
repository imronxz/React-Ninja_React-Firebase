import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// firebase/firestore
import { projectFirestore } from '../firebase/config';

// Styles
import './RecipeList.css';

// icon
import deleteIcon from '../assets/delete-icon.svg';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  /* if (recipes.length === 0) {
    return (
      <div className="error">
        <h1>Tidak ada resep yang ditemukan 🚫 </h1>
      </div>
    );
  } */

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} 🥘</p>
          {/* small snippets for methods*/}
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Detail Resep</Link>
          <img
            src={deleteIcon}
            alt="delete-icon"
            className="delete"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}
