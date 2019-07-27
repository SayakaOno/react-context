import React from 'react';
import Toolbar from './Toolbar';

export const ThemeContext = React.createContext();

const App = () => {
  return (
    <ThemeContext.Provider value={'blue'}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default App;
