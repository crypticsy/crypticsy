import { SectionTitle } from "../../utils";
import himalayanJavaCaseStudyImage from "../../../assets/publication/himalayanJavaCaseStudy.png";
import digital_threats from "../../../assets/publication/digital_threats.jpg";

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
        title: 'APT Attribution Using Deep Reinforcement Learning',
        subtitle: 'This paper investigates the application of DRL for attributing APT groups through detailed behavioural analysis.',
        type: 'Research Paper',
        publishedDate: new Date(2025, 9, 29),
        publicationURL: 'https://dl.acm.org/doi/10.1145/3736654',
        publicationImage: digital_threats,
    },
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
        <div className="bg-slate-800 rounded-md overflow-hidden h-full project cursor-pointer flex flex-col" onClick={() => window.open(publication.publicationURL, "_blank")} >
            <div className="w-full overflow-hidden aspect-square">
                <img className="w-full h-full object-cover" src={publication.publicationImage} />
            </div>
            <div className="px-5 py-6 md:p-7 flex flex-col flex-grow">
                <div className="space-y-2 flex-grow">
                    <div className="calibre-smbold">{publication.title}</div>
                    {publication.subtitle && <div className="text-sm md:text-base text-left">{publication.subtitle}</div>}
                </div>
                <div className="flex sfmono-reg pt-3 text-xs md:text-xs mt-auto">
                    <div className="mr-auto">{publication.type}</div>
                    <div className="">{formatDate(publication.publishedDate)}</div>
                </div>
            </div>
        </div>)
}


export function Publications() {
    return (
        <div className="justify-center flex items-center mt-[15vh] md:pt-[15vh]" id="publications">
            <div className='space-y-8 max-w-5xl'>
                < SectionTitle sn={'03.'} title={"Publications"} />
                <div className="calibre-reg pt-2 md:pt-10 sm:text-xs md:text-xl text-gray-300 text-justify space-y-8 md:space-y-32 w-full">
                    <div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
                        {publicaitonList.map((publication, idx) => (
                            <Publication key={idx} {...publication} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}