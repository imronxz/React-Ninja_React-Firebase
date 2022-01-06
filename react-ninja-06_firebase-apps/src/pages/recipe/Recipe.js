import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

// Styles
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3001/recipes/' + id;
  const { data: detailRecipe, isPending, error } = useFetch(url);
  const { mode } = useTheme();

  return (
    <div className={`recipe ${mode}`}>
      {/* <p>Articles pages - {id}</p> */}
      {isPending && <div className="pending">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {detailRecipe && (
        <>
          {' '}
          {/* Fragment Tag */}
          <h2 className="page-title">{detailRecipe.title}</h2>
          <p>Butuh {detailRecipe.cookingTime} untuk masak🥘</p>
          {/* array of string */}
          <ul>
            {detailRecipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{detailRecipe.method}</p>
        </>
      )}
    </div>
  );
}
