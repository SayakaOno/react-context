import React, { useState, useEffect } from 'react';
import Toolbar from './Toolbar';

export const ThemeContext = React.createContext({
  theme: 'blue',
  changeTheme: () => {}
});

const App = () => {
  const changeTheme = theme => setTheme(theme);
  const [theme, setTheme] = useState('red');

  useEffect(() => {
    setTheme('blue');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default App;
