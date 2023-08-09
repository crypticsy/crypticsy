type SectionTitleProps = {
    sn: String,
    title: String,
}

export function SectionTitle({ sn, title }: SectionTitleProps) {
    return (<div className="flex items-center">
        <div className="gap-3 mr-8 flex">
            <p className="text-[0.8rem] md:text-[1.2rem] sfmono-reg text-sky-400 my-auto mr-2">{sn}</p>
            <p className="text-[1.6rem] md:text-[2.2rem] calibre-smbold text-slate-400 whitespace-nowrap mt-2">{title}</p>
        </div>
        <hr className="w-full h-[0.05rem] bg-slate-600 border-0 rounded" />
    </div>)
}