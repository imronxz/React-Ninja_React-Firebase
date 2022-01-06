import { projectFirestore } from '../../firebase/config';

import RecipeList from '../../components/RecipeList';

import './Home.css';
import { useEffect, useState } from 'react';
export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    /* Real-Time Collection Data
    onSnapshot() is a method that is called whenever the data in the collection changes.
    */
    const unsub = projectFirestore.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No data found');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      },
    );
    // TODO: unsubscribe projectFirestore.collection('recipes').onSnapshot(...);
    return () => unsub();
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
