import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

import { projectFirestore } from '../../firebase/config';

// Styles
import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [detailRecipe, setDetailRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const recipe = doc.data();
          setDetailRecipe(recipe);
          setIsPending(false);
        } else {
          setIsPending(true);
          setError('No such recipe exists');
        }
      });
  }, [id]);

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
