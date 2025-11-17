import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        return (saved === 'dark' || saved === 'light') ? saved : 'dark';
    });

    useEffect(() => {
        // Listen for class changes on documentElement
        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'dark' : 'light');
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(newTheme);
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    return { theme, toggleTheme };
}
