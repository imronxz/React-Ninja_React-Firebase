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
    case 'CHANGE_MODE':
      return {
        ...state,
        mode: action.payload,
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

  // * Context Management state Provider
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
