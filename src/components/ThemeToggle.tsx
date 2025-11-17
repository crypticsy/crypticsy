import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
    const [theme, setTheme] = useState<string>(() => {
        const saved = localStorage.getItem("theme");
        return (saved === 'dark' || saved === 'light') ? saved : 'dark';
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.body.classList.toggle("dark", theme === "dark");
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(theme);
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={handleThemeChange}
            className="relative w-14 h-7 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:border-sky-400 dark:border-slate-600 border-gray-200 dark:bg-slate-700 bg-gray-200"
            aria-label="Toggle theme"
        >
            {/* Sliding Circle */}
            <div
                className={`absolute top-0.5 w-6 h-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                    theme === 'dark'
                        ? 'translate-x-0.5 bg-sky-400'
                        : 'translate-x-7 bg-amber-500'
                }`}
            >
                {theme === 'dark' ? (
                    <FiMoon className="w-3.5 h-3.5 text-slate-900" />
                ) : (
                    <FiSun className="w-3.5 h-3.5 text-white" />
                )}
            </div>

            {/* Background Icons */}
            <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
                <FiMoon className={`w-3.5 h-3.5 transition-opacity duration-300 ${
                    theme === 'dark' ? 'opacity-0' : 'opacity-40 text-slate-500'
                }`} />
                <FiSun className={`w-3.5 h-3.5 transition-opacity duration-300 ${
                    theme === 'dark' ? 'opacity-40 text-slate-300' : 'opacity-0'
                }`} />
            </div>
        </button>
    );
}
