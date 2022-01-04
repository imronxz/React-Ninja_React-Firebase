import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';

// Styles
import './Search.css';

export default function Search() {
  const querySearch = useLocation().search;
  const queryParams = new URLSearchParams(querySearch);

  const query = queryParams.get('q');
  const url = 'http://localhost:3001/recipes?q=' + query;
  const { error, isPending, data } = useFetch(url);

  // if there is no data from search query, then show empty state

  return (
    <div>
      <h2 className="page-title">Resep Yang Ditemukan {query}</h2>
      {error && <p>{error.message}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
