// React Hook
import { useReducer, useEffect, useState } from 'react';
// Firebase/Firestore
import { projectFirestore } from '../firebase/config';

// TODO: Global Store initialstate
let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

// TODO: Dispatching Action
const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/**TODO: Define useFirestore -> (collection)
 * @response: data from firestore
 * @dispatch: dispatch action
 * @fireStoreReducer: reducer
 * @initialState: initial state
 * @ref: reference to firestore collection
 *  addDocument: add (document) to firestore collection
 *  deleteDocument: delete (id) from firestore collection
 * @return: an Object with the following properties addDocument, deleteDocument, response
 */
export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // * Collection ref
  const ref = projectFirestore.collection(collection);

  // * Add document get from Object TransaksiForm.js
  const addDocument = async (document) => {};

  // * Delete document
  const deleteDocument = async (id) => {};

  // TODO: useEffect setIsCancelled to true
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
