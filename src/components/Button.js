import React from 'react';
import { ThemeContext } from './App';

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => {
        return (
          <button
            onClick={() =>
              theme === 'blue' ? changeTheme('yellow') : changeTheme('blue')
            }
            style={{ backgroundColor: theme }}
          >
            Click!
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Button;
