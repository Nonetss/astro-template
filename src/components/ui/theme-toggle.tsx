import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground flex h-9 w-9 items-center justify-center border transition-colors"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};
