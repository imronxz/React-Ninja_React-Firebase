import { createContext, useEffect, useReducer } from 'react';
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

/**   TODO: Define reducer ->
 * Dispatching action function
 * Case LOGIN return return user: action.payload
 * Case LOGOUT return return user: null
 * Case AUTH_IS_READY return user: action.payload and authIsReady: true
 */
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload,
      };
    case 'CHANGE_MODE':
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

/**  TODO: Define AuthContextProvider ->
 * define global state store
 * React.Context.Provider { { children } }
 */
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
    color: '#58249c',
    mode: 'dark',
  });

  // * Reducer: Berfungsi mengubah value / state dari store
  // * reducer: function yg akan mengubah state
  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  /** TODO: Define onAuthStateChanged ->
   * unsubscribe from auth state changes
   * Adds an observer for changes to the user's sign-in state.
   * This method also re-initializes the auth state on sign-out.
   */
  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    });
  }, []);

  // console.log('Auth Context state:', state);

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, changeColor, changeMode }}
    >
      {children}
    </AuthContext.Provider>
  );
};
