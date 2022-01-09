import { useEffect, useState } from 'react';
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    //TODO: Sign the user out/Logout
    try {
      /** @projectFirestore: Firestore
       *  @collection: collection/table
       *  @doc: document/row
       *  @update: Updates the document referred to by this document reference.
       *  update: online: false
       */
      //* Update online status
      const { uid } = user;
      await projectFirestore.collection('users').doc(uid).update({ online: false });

      await projectAuth.signOut();

      //* dispatch logout action
      dispatch({ type: 'LOGOUT' });

      //* update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};
