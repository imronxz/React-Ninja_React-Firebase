import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

// * Dispatching Action: Proses pemanggilan sebuah instruksi yg di sediakan reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

//TODO: ThemeProvider with props childer --> for index.js
export function ThemeProvider({ children }) {
  // * store: Tempat Penyimpanan data/value atau state
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249c',
  });

  // * Reducer: Berfungsi mengubah value / state dari store
  // * reducer: function yg akan mengubah state
  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  // * Context Management state Provider
  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
