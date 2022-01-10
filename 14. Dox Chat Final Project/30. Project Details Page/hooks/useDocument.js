import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // TODO: Real-time data
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsub = ref.onSnapshot(
      (snapshoot) => {
        if (snapshoot.data()) {
          setDocument({ ...snapshoot.data(), id: snapshoot.id });
          setError(null);
        } else {
          setError('Tidak dapat menemukan data project dengan id tersebut');
        }
      },
      (err) => {
        console.error(err.message);
        setError('Tidak dapat mengambil data project');
      },
    );

    return () => unsub();
  }, [collection, id]);

  return { document, error };
};
