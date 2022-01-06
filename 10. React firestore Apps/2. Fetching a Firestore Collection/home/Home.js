import { projectFirestore } from '../../firebase/config';

import RecipeList from '../../components/RecipeList';

import './Home.css';
import { useEffect, useState } from 'react';
export default function Home() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .get()
      .then((snapshot) => {
        const recipes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(recipes);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {/* FIXME: index.css styling (.error and .pending)*/}
      {error && <div className="error">{error}</div>}
      {isPending && <div className="pending">{isPending}</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
