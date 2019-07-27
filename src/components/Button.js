import React, { useContext } from 'react';
import { ThemeContext } from './App';

const Button = () => {
  const theme = useContext(ThemeContext);
  return <button style={{ backgroundColor: theme }}>Click!</button>;
};

export default Button;
