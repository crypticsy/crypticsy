import { SectionTitle } from "../../utils";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";

import gragoPreview from "../../../assets/projects/grago.jpeg";
import snadderPreview from "../../../assets/projects/snadder.webp";
import { onClickURLHandler } from "./Socials";

type FeaturedProjectsProps = {
    imageURL: string;
    title: string;
    description: string;
    tags: string[];
    githubURL?: string;
    hostedURL?: string;
    side?: string;
}

const FeaturedProjectList = [
    {
        title: "Snadder",
        description: "Snadder is a spin on the popular Snakes 'n Ladders game, combining the problem-solving ability of Sudoku and the user experience of Wordle, developed during my tenure at Bhoos.",
        tags: ['Python', 'React', 'Tailwind'],
        imageURL: snadderPreview,
        hostedURL: "https://snadder.io/"
    },
    {
        title: "Grago",
        description: "Grago, 'Graph on the go', is a graphical visualization tool designed for enthusiasts aiming to bolster the utilization of data analysis within the endeavors of local businesses and startups, developed as a final year project during my undergraduate study.",
        tags: ['Django', 'Postgresql', 'Data Science'],
        imageURL: gragoPreview,
    }
];

function FeaturedProject({ side, imageURL, title, description, tags, githubURL, hostedURL }: FeaturedProjectsProps) {
    const justifyType = side === 'md:text-right' ? 'md:justify-end' : 'md:justify-start';
    const imageSide = side === 'md:text-right' ? 'float-left' : 'float-right';

    return (
        <div className={"w-full flex justify-start relative " + justifyType}>
            <div className={"hidden md:block  shadow-md md:shadow-none absolute inset-0 items-center justify-center "}>
                <div className={"w-1/2 h-full overflow-hidden rounded-md " + imageSide}>
                    {
                        hostedURL && hostedURL.length > 0 
                        ? <img src={imageURL} className="h-full w-full object-cover cursor-pointer"  onClick={() => window.open(hostedURL, "_blank")}  />
                        : <img src={imageURL} className="h-full w-full object-cover" />
                    }
                </div>
            </div>

            <div className={"z-10 space-y-3 md:space-y-4 bg-slate-800 rounded-md md:bg-transparent px-5 py-6 md:p-0 w-full md:w-4/6 text-left " + side}>
                <div>
                    <p className="sfmono-reg text-xs md:text-sm text-sky-400 mb-2 md:mb-5">Featured Project</p>
                    <p className="calibre-smbold text-[1.6rem] md:text-[2.4rem] text-white">{title}</p>
                </div>

                <p className="p-0 md:p-7 bg-slate-800 flex text-base md:text-xl rounded-md">{description}</p>

                <p className="text-xs md:text-sm space-x-6 pb-1">
                    {tags.length > 0 && tags.map((tag, idx) => { return <span className="capitalize  sfmono-reg " key={idx}>{tag}</span> })}
                </p>

                <p className={"flex space-x-4 text-left justify-start " + justifyType}>
                    {githubURL && githubURL.length > 0 && <FiGithub className="w-5 h-5 hover:text-sky-500 cursor-pointer" onClick={() => window.open(githubURL, "_blank")} />}
                    {hostedURL && hostedURL.length > 0 && <IoMdOpen className="w-5 h-5 hover:text-sky-500 cursor-pointer" onClick={() => window.open(hostedURL, "_blank")}  />}
                </p>
            </div>
        </div>)
}


type NormalProjectProps = {
    title: string;
    description: string;
    tags: string[];
    onClickURL: string;
    githubURL?: string;
    hostedURL?: string;
}

const NormalProjectList = [
    {
        title: "Chess Engine",
        description: "A full fledge chess game developed using pygame, and contains an ai engine that utilizes the minimax and alpha beta pruning algorithms to offer an immersive player-versus-bot experience.",
        tags: ['Python', 'PyGame', 'Algorithm'],
        onClickURL: "https://github.com/crypticsy/Playground/tree/master/Game_Engine/Chess/",
        githubURL: "https://github.com/crypticsy/Playground/tree/master/Game_Engine/Chess/"
    }, 
    {
        title: "Path Visualizer",
        description: "A python project to visualize search algorithms on a grid,  built using the flask framework and the front-end is built using HTML, CSS and JavaScript, as well as uses tailwindcss for styling.",
        tags: ['Flask', 'Javascript', 'TailwindCSS'],
        onClickURL: "https://path-visualizer-crypticsy.vercel.app/",
        githubURL: "https://github.com/crypticsy/PathVisualizer",
        hostedURL: "https://path-visualizer-crypticsy.vercel.app/"
    },
    {
        title: "Sanctuary.io",
        description: "A compilation of modest p5.js projects conceived during moments of leisure, ignited by a sense of curiosity.",
        tags: ['P5JS', 'Javascript'],
        onClickURL: "https://crypticsy.github.io/sanctuary/",
        githubURL: "https://github.com/crypticsy/sanctuary",
        hostedURL: "https://crypticsy.github.io/sanctuary/"
    },
    {
        title: "Ropey DVD Management System",
        description: "An inventory and rental management system developed in ASP.NET MVC Framework that has multiple level of access based on user level, as well as an interactive user interface to help with the leasing process of DVD within the store.",
        tags: ['ASP.NET', 'MVC', 'Bootstrap'],
        onClickURL: "https://github.com/crypticsy/RopeyDVDManagementSystem",
        githubURL: "https://github.com/crypticsy/RopeyDVDManagementSystem"
    }
];

function NormalProject({title, description, tags, onClickURL, githubURL, hostedURL}:NormalProjectProps){
    return (
    <div 
        className="px-5 py-6 md:p-7 bg-slate-800 rounded-md flex-row h-full project cursor-pointer"
        onClick={()=>onClickURLHandler(onClickURL)}>

        <div className="space-y-3 mb-auto h-[88%]">
            <p className={"flex space-x-5 text-left pb-3"}>
                {githubURL && githubURL.length > 0 && <FiGithub className="w-5 h-5 hover:text-sky-500 cursor-pointer" onClick={() => window.open(githubURL, "_blank")} />}
                {hostedURL && hostedURL.length > 0 && <IoMdOpen className="w-5 h-5 hover:text-sky-500 cursor-pointer" />}
            </p>

            <p className="calibre-smbold text-[1.4rem] md:text-[1.6rem] text-white leading-8 title">{title}</p>
            <p className="flex text-sm md:text-base rounded-md leading-6">{description}</p>
        </div>

        <div className="mt-5">
            <p className="text-xs md:text-xs sfmono-reg space-x-6">
                {tags.length > 0 && tags.map((tag, idx) => { return <span className="capitalize sfmono-reg" key={idx}>{tag}</span> })}
            </p>
        </div>
    </div>
    )
    
}


export function Work() {
    return (
        <div className="justify-center flex items-center mt-[15vh] md:pt-[15vh]"  id="work">
            <div className='space-y-8 max-w-5xl'>

                < SectionTitle sn={'02.'} title={'Some Things I’ve Built'} />
                <div className="calibre-reg pt-2 md:pt-10 sm:text-xs md:text-xl text-gray-300 text-justify space-y-8 md:space-y-32">
                    {
                        FeaturedProjectList.map((project: FeaturedProjectsProps, idx) => {
                            return <FeaturedProject
                                key={idx}
                                side={idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                                imageURL={project.imageURL}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                githubURL={project.githubURL}
                                hostedURL={project?.hostedURL} />
                        })
                    }
                </div>

                <div className="calibre-smbold pt-8 md:pt-[28vh] pb-8 sm:text-xs md:text-3xl text-center">Other Noteworthy Projects</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        NormalProjectList.map((project: NormalProjectProps, idx) => {
                            return <NormalProject
                                key={idx}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                onClickURL={project.onClickURL}
                                githubURL={project.githubURL}
                                hostedURL={project?.hostedURL} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}