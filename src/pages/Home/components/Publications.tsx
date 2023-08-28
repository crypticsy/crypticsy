import { SectionTitle } from "../../utils";
import himalayanJavaCaseStudyImage from "../../../assets/publication/himalayanJavaCaseStudy.png";

type PulicationProp = {
    title: string,
    subtitle?: string,
    type: string,
    publishedDate: Date,
    publicationURL: string,
    publicationImage: string,
}

function formatDate(date: Date) {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

const publicaitonList = [
    {
        title: 'Himalayan Java',
        subtitle: 'Navigating Challenges and Pioneering Sustainability in Nepali Coffee Industry',
        type: 'A Case Study',
        publishedDate: new Date(2023, 7, 1),
        publicationURL: 'https://parthstudent.vc/case-study/',
        publicationImage: himalayanJavaCaseStudyImage,
    }
]

function Publication(publication: PulicationProp) {
    return (
        <div className="px-5 py-6 md:p-7 bg-slate-800 rounded-md flex-row h-full project cursor-pointer" onClick={() => window.open(publication.publicationURL, "_blank")} >
            <div className="space-y-6">
                <div className="w-full h-1/3 overflow-hidden rounded-lg mx-auto">
                    <img className="" src={publication.publicationImage} />
                </div>
                <div className="space-y-2">
                    <div className="calibre-smbold">{publication.title}</div>
                    {publication.subtitle && <div className="text-sm md:text-base text-left">{publication.subtitle}</div>}
                    <div className="flex sfmono-reg pt-3 text-xs md:text-xs">
                        <div className="mr-auto">{publication.type}</div>
                        <div className="">{formatDate(publication.publishedDate)}</div>
                    </div>
                </div>
            </div>
        </div>)
}


export function Publications() {
    return (
        <div className="justify-center flex items-center mt-[15vh] md:pt-[15vh]" id="publications">
            <div className='space-y-8 max-w-5xl'>
                < SectionTitle sn={'03.'} title={"Some of My Writings"} />
                <div className="calibre-reg pt-2 md:pt-10 sm:text-xs md:text-xl text-gray-300 text-justify space-y-8 md:space-y-32 w-full">
                    <div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
                        {publicaitonList.map(publication => Publication(publication))}
                    </div>
                </div>
            </div>
        </div>
    )
}