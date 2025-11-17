import { useTheme } from "../contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
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
