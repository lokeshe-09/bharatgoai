import { useEffect } from 'react';

export const ThemeToggle = () => {
  useEffect(() => {
    // Force dark mode only
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
  }, []);

  return null;
};
