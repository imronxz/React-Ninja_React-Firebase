import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

/*  TODO: Define reducer ->
 * Dispatching action function
 * Case LOGIN return user: action.payload
 * Case LOGOUT return user: null
 */
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

/*  TODO: Define AuthContextProvider ->
 * define global state store
 * React.Context.Provider { { children } }
 */
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log('Auth Context state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
