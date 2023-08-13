import { SectionTitle } from "../../utils";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";

import gragoPreview from "../../../assets/projects/grago.jpeg";

type FeaturedProjectsProps = {
    imageURL: string;
    title: string;
    description: string;
    tags: string[];
    githubURL: string;
    hostedURL?: string;
    side?: string;
}

const FeaturedProjectList = [
    {
        title: "Grago",
        description: "Graph on the go is a datascience project that i did during my final year project to allow data visualization for startups. Graph on the go is a datascience project that i did during my final year project to allow data visualization for startups.",
        tags: ['python', 'javascript'],
        imageURL: gragoPreview,
        githubURL: "https://github.com/crypticsy/Grago"
    }
];

export function FeaturedProject({ side, imageURL, title, description, tags, githubURL, hostedURL }: FeaturedProjectsProps) {

    return (
        <div className="grid md:grid-cols-2">
            <div className="items-center hidden md:flex">
                <img src={imageURL} className="shadow-md" />
            </div>
            
            <div className={"space-y-3 md:space-y-4 bg-slate-700 rounded-md md:bg-transparent px-6 py-6 md:px-0 md:py-0 text-left md:" + side }>
                <div>
                    <p className="sfmono-reg text-xs md:text-sm text-sky-400 mb-1 md:mb-4">Featured Project</p>
                    <p className="calibre-smbold text-[1.6rem] md:text-[2.4rem] text-white">{title}</p>
                </div>
                
                <p className="p-0 md:p-7 bg-slate-700 flex text-base md:text-lg rounded-md">{description}</p>
                
                <p className="text-xs md:text-sm sfmono-reg space-x-4">
                    {tags.length > 0 && tags.map((tag, idx) => { return <span className="capitalize" key={idx}>{tag}</span> })}
                </p>

                <p className={"flex space-x-4 text-left justify-start " + (side === 'text-right' ? 'md:justify-end' : 'md:justify-start')}>
                    <FiGithub className="w-5 h-5 hover:text-sky-500 cursor-pointer" onClick={() => window.open(githubURL, "_blank")} />
                    {hostedURL && hostedURL.length > 0 && <IoMdOpen className="w-5 h-5 hover:text-sky-500 cursor-pointer" />}
                </p>
            </div>
        </div>)
}

export function Work() {

    return (
        <div className="justify-center flex items-center mt-[15vh] md:mt-[25vh]">
            <div className='space-y-8' id="work">

                < SectionTitle sn={'02.'} title={'Some Things I’ve Built'} />
                <div className="calibre-reg sm:text-xs md:text-xl  max-w-4xl text-gray-400 text-justify space-y-5">
                    {
                        FeaturedProjectList.map((project: FeaturedProjectsProps, idx) => {
                            return <FeaturedProject
                                key={idx}
                                side={idx % 2 === 0 ? 'text-right' : 'text-left'}
                                imageURL={project.imageURL}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                githubURL={project.githubURL}
                                hostedURL={project?.hostedURL} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}