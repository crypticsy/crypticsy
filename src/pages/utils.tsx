import { LeftSocials, RightSocials } from './Home/components';

type SectionTitleProps = {
    sn: String;
    title: String;
}

export function SectionTitle({ sn, title }: SectionTitleProps) {
    return (<div className="flex items-center">
        <div className="gap-3 mr-8 flex">
            {sn.length > 0 && <p className="text-[0.8rem] md:text-[1.2rem] sfmono-reg text-sky-400 my-auto">{sn}</p> }
            <p className="text-[1.3rem] md:text-[2.2rem] calibre-smbold text-white whitespace-nowrap mt-2">{title}</p>
        </div>
        <hr className="w-full h-[0.05rem] bg-slate-600 border-0 rounded" />
    </div>)
}

export function SubSectionTitle({ sn, title }: SectionTitleProps) {
    return (<div className="flex items-center">
        <div className="gap-3 mr-8 flex">
            {sn.length > 0 && <p className="text-[0.8rem] md:text-[1.1rem] sfmono-reg text-sky-400 my-auto">{sn}</p> }
            <p className="text-[1.2rem] md:text-[1.8rem] calibre-smbold text-slate-400 whitespace-nowrap mt-2">{title}</p>
        </div>
        <hr className="w-full h-[0.05rem] bg-slate-600 border-0 rounded" />
    </div>)
}

export function handleDownload(fileName: string) {
    const filePath = `/${fileName}`;

    fetch(filePath)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Animesh Singh Basnet - ' + fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        });
};

export function handleNavLinkClick(hash:string){
    window.location.hash = hash;
};

type PageContentLayoutProps = {
    children: React.ReactNode;
    showSideSocials?: boolean;
}

export function PageContentLayout({ children, showSideSocials = true }: PageContentLayoutProps) {
    if (!showSideSocials) {
        return <>{children}</>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto]">
            <LeftSocials/>
            <div>{children}</div>
            <RightSocials/>
        </div>
    );
}