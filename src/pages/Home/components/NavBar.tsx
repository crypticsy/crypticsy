import { useEffect, useRef, useState, useMemo } from "react";
import { navigationItems } from "../../../data";
import { ThemeToggle } from "../../../components/ThemeToggle";
import { useTheme } from "../../../hooks/useTheme";

type SectionTitleProps = {
    sn: string,
    title: string,
    scrollToID: string
}

export function NavBar() {
    const { theme } = useTheme();
    const [isAtPageTop, setIsAtPageTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollTopRef = useRef(0);
    const ticking = useRef(false);

    const movingNavStyles = useMemo(() => ({
        boxShadow: theme === 'dark' ? '0px 0px 10px black' : '0px 0px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme === 'dark' ? 'rgba(23, 23, 23, 0.8)' : 'rgba(241, 245, 249, 0.8)',
        backdropFilter: 'blur(10px)',
    }), [theme]);

    const handleScroll = () => {
        const rootDiv = document.getElementById('root');

        if (rootDiv && !ticking.current) {
            ticking.current = true;

            requestAnimationFrame(() => {
                const scrollTop = rootDiv.scrollTop;

                // Check if we're at the top (with small threshold for reliability)
                const isTop = scrollTop <= 10;
                if (isAtPageTop !== isTop) {
                    setIsAtPageTop(isTop);
                }

                // Handle navbar show/hide animation
                if (lastScrollTopRef.current < scrollTop) {
                    // Scrolling down
                    const navBar = document.getElementById("navbar")
                    if(navBar){
                        if(navBar.classList.contains('show-on-scroll')){
                            navBar.classList.replace('show-on-scroll', 'hide-on-scroll')
                        }else{
                            navBar.classList.add('hide-on-scroll')
                        }
                    }
                } else if (lastScrollTopRef.current > scrollTop) {
                    // Scrolling up
                    document.getElementById("navbar")?.classList.replace('hide-on-scroll', 'show-on-scroll')
                }

                lastScrollTopRef.current = scrollTop;
                ticking.current = false;
            });
        }
    };

    useEffect(() => {
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
            rootDiv.addEventListener('scroll', handleScroll, { passive: true });
            return () => {
                rootDiv.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isAtPageTop]);

    return (
        <>
            {/* Desktop Navbar */}
            <div
                className="fixed top-0 left-0 right-0 hidden md:block transition-all duration-300 ease-in-out"
                id="navbar"
                style={isAtPageTop ? {} : movingNavStyles}
            >
                <nav className={`flex items-center justify-end py-7 pr-20 gap-8 transition-all duration-500 ease-in-out ${isAtPageTop ? '' : 'navbar-scrolled'}`}>
                    {navigationItems.map((item) => (
                        <NavSection key={item.scrollToID} sn={item.sn} title={item.title} scrollToID={item.scrollToID} />
                    ))}
                    <ThemeToggle />
                </nav>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="fixed top-0 right-0 p-6 md:hidden z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-text-primary hover:text-blue-600 dark:hover:text-sky-400 transition-colors duration-200"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        // Close icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Side Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-bg-primary/95 backdrop-blur-xl border-l border-border-primary transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col pt-20 px-6 space-y-6">
                    {navigationItems.map((item) => (
                        <MobileNavSection
                            key={item.scrollToID}
                            sn={item.sn}
                            title={item.title}
                            scrollToID={item.scrollToID}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                    ))}
                    <div className="pt-4 border-t border-border-primary flex justify-center">
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Backdrop overlay when menu is open */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    )
}

function NavSection({ sn, title, scrollToID }: SectionTitleProps) {
    const handleScrollToClick = () => {
        const element = document.getElementById(scrollToID);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (<div className="flex items-center">
        <div onClick={handleScrollToClick} className="gap-1.5 mr-8 flex cursor-pointer p-2 text-sm text-text-primary hover:text-blue-600 dark:hover:text-sky-400">
            <p className="text-blue-600 dark:text-sky-400 sfmono-reg">{sn}</p>
            <p className="whitespace-nowrap sfmono-reg">{title}</p>
        </div>
    </div>)
}

function MobileNavSection({ sn, title, scrollToID, onClick }: SectionTitleProps & { onClick: () => void }) {
    const handleScrollToClick = () => {
        const element = document.getElementById(scrollToID);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            onClick(); // Close menu after clicking
        }
    };

    return (
        <div
            onClick={handleScrollToClick}
            className="flex items-center gap-2 cursor-pointer group py-2"
        >
            <p className="text-blue-600 dark:text-sky-400 sfmono-reg text-sm">{sn}</p>
            <p className="text-text-primary sfmono-reg text-lg group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                {title}
            </p>
        </div>
    )
}