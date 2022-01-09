import { useState, useEffect } from 'react';
import { projectAuth, projectStorage } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  // TODO: Property from SignupForm
  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
      );

      if (!res) {
        throw new Error('Could not complete signup');
      }

      /** @uploadPath: Upload user thumbnail
       *  @projectStorage: Firebase Storage
       *  @ref: reference to firestore collection
       *  @put:Uploads data to this reference's location.
       *  @getDownloadURL: Fetches a long lived download URL for this object.
       */
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      /** @updateProfile: Updates a user's profile data.
       *  @displayName: The new display name for the user.
       *  @photoURL: The new URL for the user's profile picture.
       */
      //* add displayName and photoURL: imgUrl -> to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      //* dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

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

  return { signup, error, isPending };
};
