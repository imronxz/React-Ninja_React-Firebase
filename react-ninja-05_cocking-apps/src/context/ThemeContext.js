import { createContext } from 'react';

export const ThemeContext = createContext();

//TODO: ThemeProvider with props childer --> for index.js
export function ThemeProvider({ children }) {
  //FIXME: constume logic

  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  );
}
