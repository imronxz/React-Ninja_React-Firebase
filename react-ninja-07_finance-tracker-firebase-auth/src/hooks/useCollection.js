import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    /**  TODO: Add real-time listener
     * @unsubscribe: unsubscribe from real-time listener
     * @ref: reference to firestore collection
     * onSnapshot: real-time listener
     * snapshot: data from firestore
     * docs: data from firestore
     * @setDocuments: setDocuments
     * @setError: setError
     */
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id }); //FIXME: id for doc collection
        });

        // * update state
        setDocuments(results);
        setError(null);
      },
      (err) => {
        console.error(err);
        setError('Error fetching documents');
      },
    );
    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection]);

  // return obj document and error
  return { documents, error };
};
