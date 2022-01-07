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

// TODO: Dispatching Action manually
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return {
        document: null,
        isPending: true,
        error: null,
        success: false,
      };
    case 'ADDED_DOCUMENT':
      return {
        /* no need spread state, bcs we update manually initialState */
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case 'ERROR':
      return {
        /* no need spread state, bcs we update manually initialState */
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
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
 *  addDocument: add (doc) to firestore collection
 *  deleteDocument: delete (id) from firestore collection
 * @return: an Object with the following properties addDocument, deleteDocument, response
 */
export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // * Collection ref
  const ref = projectFirestore.collection(collection);

  //! only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // * Add document get from Object TransaksiForm.js
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      dispatchIfNotCancelled({
        type: 'ADDED_DOCUMENT',
        payload: addDocument, //FIXME: getback to addDocument
      });
    } catch (error) {
      dispatchIfNotCancelled({
        type: 'ERROR',
        payload: error.message,
      });
    }
  };

  // * Delete document
  const deleteDocument = async (id) => {};

  // TODO: useEffect setIsCancelled to true
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
