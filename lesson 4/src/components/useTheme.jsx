import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('appTheme');
    return storedTheme || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('appTheme', newTheme); // Збереження теми в localStorage
  };

  return [theme, toggleTheme];
};

export default useTheme;
