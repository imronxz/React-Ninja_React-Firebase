import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export const useDocument = (collection, id) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // TODO: Real-time data
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsub = ref.onSnapshot(
      (snapshoot) => {
        setDocuments({ ...snapshoot.data(), id: snapshoot.id });
        setError(null);
      },
      (err) => {
        console.error(err.message);
        setError('Tidak dapat mengambil data project');
      },
    );

    return () => unsub();
  }, [collection, id]);

  return { documents, error };
};
