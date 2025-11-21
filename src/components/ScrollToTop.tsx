import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export function ScrollToTop() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const rootDiv = document.getElementById('root');
            if (rootDiv) {
                const scrollTop = rootDiv.scrollTop;
                const scrollHeight = rootDiv.scrollHeight - rootDiv.clientHeight;
                const progress = (scrollTop / scrollHeight) * 100;

                setScrollProgress(progress);
                setIsVisible(scrollTop > 300); // Show after scrolling 300px
            }
        };

        const rootDiv = document.getElementById('root');
        if (rootDiv) {
            rootDiv.addEventListener('scroll', handleScroll, { passive: true });
            return () => rootDiv.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
            rootDiv.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    if (!isVisible) return null;

    const circumference = 2 * Math.PI * 18; // radius = 18
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <div className="fixed bottom-8 right-8 z-50 lg:hidden">
            <button
                onClick={scrollToTop}
                className="relative w-12 h-12 flex items-center justify-center dark:bg-slate-800/80 bg-white/90 backdrop-blur-sm rounded-full border dark:border-slate-700 border-gray-300 hover:border-blue-600 dark:hover:border-sky-400 transition-all duration-300 hover:scale-110 group shadow-lg"
                aria-label="Scroll to top"
            >
                {/* Progress circle */}
                <svg className="absolute inset-0 w-12 h-12 -rotate-90">
                    {/* Background circle */}
                    <circle
                        cx="24"
                        cy="24"
                        r="18"
                        fill="none"
                        stroke="rgb(51 65 85)"
                        strokeWidth="2"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="24"
                        cy="24"
                        r="18"
                        fill="none"
                        stroke="rgb(37 99 235)"
                        strokeWidth="2"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-300"
                    />
                </svg>

                {/* Arrow icon */}
                <FiArrowUp className="w-5 h-5 dark:text-slate-300 text-gray-700 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors relative z-10" />
            </button>
        </div>
    );
}
