import { useFetch } from '../../hooks/useFetch';

import './Home.css';
export default function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch('http://localhost:3001/recipes');

  return (
    <div className="home">
      {/* FIXME: index.css styling (.error and .pending)*/}
      {error && <div className="error">{error}</div>}
      {isPending && <div className="pending">{isPending}</div>}
      {recipes &&
        recipes.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
}
