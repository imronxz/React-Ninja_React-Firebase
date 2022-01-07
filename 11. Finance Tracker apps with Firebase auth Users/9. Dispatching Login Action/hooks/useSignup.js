import { useState } from 'react';
import { projectAuth } from '../firebase/config';

import { useAuthContext } from './useAuthContext';

export function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // costum hooks useAuthContext
  const { dispatch } = useAuthContext();

  const signup = async (email, password, username) => {
    setError(null);
    setIsPending(true);

    try {
      // daftar user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
      );

      // if there is no res.user, then there is an error
      if (!res) {
        throw new Error('Pendaftaran gagal');
      }

      // add displayName to user
      await res.user.updateProfile({ username });

      // Dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
}
