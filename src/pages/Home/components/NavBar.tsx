import { useEffect, useState } from "react";

type SectionTitleProps = {
    sn: string,
    title: string,
    scrollToID: string
}

const movingNavStyles = {
    boxShadow: '0px 0px 10px  black',
    offset: 'x 0',
}

export function NavBar() {
    const [isAtPageTop, setIsAtPageTop] = useState(true);
    let lastScrollTop = 0;

    const handleScroll = () => {
        const rootDiv = document.getElementById('root');
        
        if (rootDiv) {
            const scrollTop = rootDiv.scrollTop;
            if (scrollTop === 0) {
                setIsAtPageTop(true);
            } else if (lastScrollTop < scrollTop) {
                setIsAtPageTop(false);
                const navBar = document.getElementById("navbar")
                if(navBar){
                    if(navBar.classList.contains('show-on-scroll')){
                        document.getElementById("navbar")?.classList.replace('show-on-scroll', 'hide-on-scroll')
                    }else{
                        navBar.classList.add('hide-on-scroll')
                    }
                }

            } else {
                setIsAtPageTop(false);
                document.getElementById("navbar")?.classList.replace('hide-on-scroll', 'show-on-scroll')
            }
            lastScrollTop = scrollTop;
        }
    };

    useEffect(() => {
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
            rootDiv.addEventListener('scroll', handleScroll);
            return () => {
                rootDiv.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div className="fixed top-0 w-full hidden md:block transition-all duration-200 ease-in-out" id="navbar" style={isAtPageTop ? {} : movingNavStyles}>
            <nav className="flex items-center justify-end py-7 pr-20 gap-8">
                <NavSection sn={'01.'} title={'About'} scrollToID={'about'} />
                <NavSection sn={'02.'} title={'Work'} scrollToID={'work'} />
            </nav>
        </div>
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
        <div onClick={handleScrollToClick} className="gap-1.5 mr-8 flex cursor-pointer p-2 text-sm text-white hover:text-sky-400">
            <p className="text-sky-400 sfmono-reg">{sn}</p>
            <p className="whitespace-nowrap sfmono-reg">{title}</p>
        </div>
    </div>)
}