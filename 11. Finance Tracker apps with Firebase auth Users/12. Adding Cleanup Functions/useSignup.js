import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';

import { useAuthContext } from './useAuthContext';

export function useSignup() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // costum hooks useAuthContext
  const { dispatch } = useAuthContext();

  const signup = async (email, password, username) => {
    setError(null);
    setIsPending(true);

    try {
      //TODO: daftar user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
      );

      //TODO: if there is no res.user, then there is an error
      if (!res) {
        throw new Error('Pendaftaran gagal');
      }

      //TODO: add displayName to user
      await res.user.updateProfile({ username });

      //TODO: Dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      //TODO: update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
}
