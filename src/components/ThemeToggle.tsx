import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="no-theme-transition relative w-14 h-7 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-sky-400 hover:border-blue-600 dark:hover:border-sky-400 dark:border-slate-600 border-gray-200 dark:bg-slate-700 bg-gray-200"
            aria-label="Toggle theme"
        >
            {/* Sliding Circle */}
            <div
                className={`no-theme-transition absolute top-0.5 w-6 h-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                    theme === 'dark'
                        ? 'translate-x-0.5 bg-white'
                        : 'translate-x-7 bg-amber-500'
                }`}
            >
                {theme === 'dark' ? (
                    <FiMoon className="w-3.5 h-3.5 text-gray-900" />
                ) : (
                    <FiSun className="w-3.5 h-3.5 text-white" />
                )}
            </div>

            {/* Background Icons */}
            <div className="no-theme-transition absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
                <FiMoon className={`no-theme-transition w-3.5 h-3.5 transition-opacity duration-300 ${
                    theme === 'dark' ? 'opacity-0' : 'opacity-40 text-slate-500'
                }`} />
                <FiSun className={`no-theme-transition w-3.5 h-3.5 transition-opacity duration-300 ${
                    theme === 'dark' ? 'opacity-40 text-slate-300' : 'opacity-0'
                }`} />
            </div>
        </button>
    );
}
