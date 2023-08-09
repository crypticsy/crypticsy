type SectionTitleProps = {
    sn: string,
    title: string,
    scrollToID: string
}

function NavSection({ sn, title, scrollToID }: SectionTitleProps) {
    const handleScrollToClick = () => {
        const element = document.getElementById(scrollToID);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (<div className="flex items-center">
        <div onClick={handleScrollToClick} className="gap-1.5 mr-8 flex cursor-pointer p-2 sfmono-reg text-sm">
            <p className="text-sky-400">{sn}</p>
            <p className="text-white whitespace-nowrap">{title}</p>
        </div>
    </div>)
}

export function NavBar() {

    return (
        <div className="fixed top-0 w-full z-10 hidden md:block">
            <nav 
                className="flex items-center justify-end py-7 pr-20 transition-shadow duration-300 gap-8">
                <NavSection sn={'01.'} title={'About'} scrollToID={'about'}/>
                <button
                    className='px-3 py-2 border-2  border-sky-400 text-sky-400 rounded-md text-sm'
                    onClick={() => { }}
                >
                    Resume
                </button>
            </nav>
        </div>
    )
}