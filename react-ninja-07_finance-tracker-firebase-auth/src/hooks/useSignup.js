import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export function useSignup() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, username) => {
    setError(null);
    setIsPending(true);

    try {
      // daftar user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(res.user);

      // if there is no res.user, then there is an error
      if (!res.user) {
        throw new Error('Pendaftaran gagal');
      }

      // add displayName to user
      await res.user.updateProfile({ username });

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
