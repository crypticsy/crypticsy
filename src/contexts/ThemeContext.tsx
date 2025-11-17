import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to get initial theme and apply it immediately
function getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem('theme');
    const isValidTheme = savedTheme === 'dark' || savedTheme === 'light';
    return isValidTheme ? savedTheme : 'dark';
}

// Apply theme classes immediately (before React renders)
function applyTheme(theme: Theme) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const initialTheme = getInitialTheme();
        // Apply theme immediately on initialization
        applyTheme(initialTheme);
        return initialTheme;
    });

    useEffect(() => {
        // Update document class and localStorage when theme changes
        applyTheme(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            // Apply immediately for instant feedback
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
