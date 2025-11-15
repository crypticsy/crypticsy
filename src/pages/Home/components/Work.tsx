import { useState, useEffect, useRef } from "react";
import { SectionTitle } from "../../utils";
import { FiGithub, FiStar, FiGitBranch, FiSearch } from "react-icons/fi";
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
};

const FeaturedProjectList = [
  {
    title: "Snadder",
    description:
      "Snadder is a spin on the popular Snakes 'n Ladders game, combining the problem-solving ability of Sudoku and the user experience of Wordle, developed during my tenure at Bhoos.",
    tags: ["Python", "React", "Tailwind"],
    imageURL: snadderPreview,
    hostedURL: "https://snadder.io/",
  },
  {
    title: "HAR System",
    description:
      "Human Activity Recognition (HAR) system designed to process and analyze sensor data to recognize human activities using XGBoost for the CASAS Smart Home Data Set - Dataset 17.",
    tags: ["Streamlit", "XGBoost"],
    imageURL:
      "https://github.com/crypticsy/human-activity-recognition/blob/master/Images/demo.gif?raw=true",
    githubURL: "https://github.com/crypticsy/human-activity-recognition",
  },
  {
    title: "Grago",
    description:
      "Grago, 'Graph on the go', is a graphical visualization tool designed for enthusiasts aiming to bolster the utilization of data analysis within the endeavors of local businesses and startups, developed as a final year project during my undergraduate study.",
    tags: ["Django", "Postgresql", "Data Science"],
    imageURL: gragoPreview,
  },
];

function FeaturedProject({
  side,
  imageURL,
  title,
  description,
  tags,
  githubURL,
  hostedURL,
}: FeaturedProjectsProps) {
  const justifyType =
    side === "md:text-right" ? "md:justify-end" : "md:justify-start";
  const imageSide = side === "md:text-right" ? "float-left" : "float-right";
  const imageOverlayRef = useRef<HTMLDivElement | null>(null);
  const descOverlayRef = useRef<HTMLDivElement | null>(null);

  const animateIn = (ref: React.RefObject<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = '650ms ease';
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = (ref: React.RefObject<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
  };

  return (
    <div className={"w-full flex justify-start relative " + justifyType}>
      <div
        className={
          "hidden md:block  shadow-md md:shadow-none absolute inset-0 items-center justify-center "
        }
      >
        <div
          className={"w-1/2 h-full overflow-hidden rounded-md relative " + imageSide}
          onMouseEnter={() => animateIn(imageOverlayRef)}
          onMouseLeave={() => animateOut(imageOverlayRef)}
        >
          <div
            ref={imageOverlayRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(56, 189, 248, 0.3) 70%, hsla(0,0%,0%,0) 100%)',
              backgroundSize: '250% 250%, 100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '-100% -100%, 0 0',
              pointerEvents: 'none',
              zIndex: 10
            }}
          />
          {hostedURL && hostedURL.length > 0 ? (
            <img
              src={imageURL}
              className="h-full w-full object-cover cursor-pointer"
              onClick={() => window.open(hostedURL, "_blank")}
            />
          ) : (
            <img src={imageURL} className="h-full w-full object-cover" />
          )}
        </div>
      </div>

      <div
        className={
          "z-10 space-y-3 md:space-y-4 bg-slate-800 rounded-md md:bg-transparent px-5 py-6 md:p-0 w-full md:w-4/6 text-left " +
          side
        }
      >
        <div>
          <p className="sfmono-reg text-xs md:text-sm text-sky-400 mb-2 md:mb-5">
            Featured Project
          </p>
          <p className="calibre-smbold text-[1.6rem] md:text-[2.4rem] text-white">
            {title}
          </p>
        </div>

        <div
          className="p-0 md:p-7 bg-slate-800 flex text-base md:text-xl rounded-md relative overflow-hidden"
          onMouseEnter={() => animateIn(descOverlayRef)}
          onMouseLeave={() => animateOut(descOverlayRef)}
        >
          <div
            ref={descOverlayRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(56, 189, 248, 0.3) 70%, hsla(0,0%,0%,0) 100%)',
              backgroundSize: '250% 250%, 100% 100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '-100% -100%, 0 0',
              pointerEvents: 'none',
              zIndex: 10
            }}
          />
          <p>{description}</p>
        </div>

        <p className="text-xs md:text-sm space-x-6 pb-1">
          {tags.length > 0 &&
            tags.map((tag, idx) => {
              return (
                <span className="capitalize  sfmono-reg " key={idx}>
                  {tag}
                </span>
              );
            })}
        </p>

        <p className={"flex space-x-4 text-left justify-start " + justifyType}>
          {githubURL && githubURL.length > 0 && (
            <FiGithub
              className="w-5 h-5 hover:text-sky-500 cursor-pointer"
              onClick={() => window.open(githubURL, "_blank")}
            />
          )}
          {hostedURL && hostedURL.length > 0 && (
            <IoMdOpen
              className="w-5 h-5 hover:text-sky-500 cursor-pointer"
              onClick={() => window.open(hostedURL, "_blank")}
            />
          )}
        </p>
      </div>
    </div>
  );
}

type NormalProjectProps = {
  title: string;
  description: string;
  tags: string[];
  onClickURL: string;
  githubURL?: string;
  hostedURL?: string;
};

const NormalProjectList = [
  {
    title: "The Marauder's Map",
    description:
      "A web application inspired by the Marauder’s Map from the Harry Potter universe, enabling users to explore a digital map of Hogwarts with moving footprints and hidden rooms.",
    tags: ["React-Three-Fiber", "Typescript"],
    onClickURL: "https://crypticsy.github.io/the-marauders-map/",
    githubURL: "https://github.com/crypticsy/the-marauders-map",
    hostedURL: "https://crypticsy.github.io/the-marauders-map/",
  },
  {
    title: "Pocket Booth",
    description:
      "A pocket-sized digital photo booth application that allows users to capture instant photo strips and store them locally.",
    tags: ["Camera", "Google-oauth", "Typescript"],
    onClickURL: "https://crypticsy.github.io/pocket-booth/",
    githubURL: "https://github.com/crypticsy/pocket-booth",
    hostedURL: "https://crypticsy.github.io/pocket-booth/",
  },
  {
    title: "Vision Caster",
    description:
      "An interactive image analysis system for the visually impaired. It uses the BLIP model on a Raspberry Pi to process images and give real-time descriptive captions and auditory feedback.",
    tags: ["RasberryPi", "Transformers", "Azure"],
    onClickURL: "https://github.com/crypticsy/VisionCaster",
    githubURL: "https://github.com/crypticsy/VisionCaster",
  },
  {
    title: "Sanctuary.io",
    description:
      "A compilation of modest p5.js projects conceived during moments of leisure, ignited by a sense of curiosity.",
    tags: ["P5JS", "Javascript"],
    onClickURL: "https://crypticsy.github.io/sanctuary/",
    githubURL: "https://github.com/crypticsy/sanctuary",
    hostedURL: "https://crypticsy.github.io/sanctuary/",
  },
  {
    title: "From Me to You",
    description:
      "A web application for sending heartfelt digital letters to friends and loved ones.",
    tags: ["Typescript", "TailwindCSS"],
    onClickURL: "https://crypticsy.github.io/from-me-to-you/",
    githubURL: "https://github.com/crypticsy/from-me-to-you",
    hostedURL: "https://crypticsy.github.io/from-me-to-you/",
  },
  {
    title: "Ropey DVD Management System",
    description:
      "An inventory and rental management system developed in ASP.NET MVC Framework that has multiple level of access based on user level, as well as an interactive user interface to help with the leasing process of DVD within the store.",
    tags: ["ASP.NET", "MVC", "Bootstrap"],
    onClickURL: "https://github.com/crypticsy/RopeyDVDManagementSystem",
    githubURL: "https://github.com/crypticsy/RopeyDVDManagementSystem",
  },
  {
    title: "Chess Engine",
    description:
      "A full fledge chess game developed using pygame, and contains an ai engine that utilizes the minimax and alpha beta pruning algorithms to offer an immersive player-versus-bot experience.",
    tags: ["Python", "PyGame", "Algorithm"],
    onClickURL:
      "https://github.com/crypticsy/Playground/tree/master/Game_Engine/Chess/",
    githubURL:
      "https://github.com/crypticsy/Playground/tree/master/Game_Engine/Chess/",
  },
  {
    title: "Animated Movie Ontology",
    description:
      "A semantic programming application tailored for the animated film industry that organizes and analyzes complex data sets from animated films, leveraging ontologies and RDF files to facilitate this process.",
    tags: ["Semantics", "Protege", "Streamlit"],
    onClickURL:
      "https://github.com/crypticsy/Academia/tree/master/Animated_Movie_Ontology",
    githubURL:
      "https://github.com/crypticsy/Academia/tree/master/Animated_Movie_Ontology",
  },
  {
    title: "Path Visualizer",
    description:
      "A python project to visualize search algorithms on a grid,  built using the flask framework and the front-end is built using HTML, CSS and JavaScript, as well as uses tailwindcss for styling.",
    tags: ["Flask", "Javascript", "TailwindCSS"],
    onClickURL: "https://path-visualizer-crypticsy.vercel.app/",
    githubURL: "https://github.com/crypticsy/PathVisualizer",
    hostedURL: "https://path-visualizer-crypticsy.vercel.app/",
  },
];

function NormalProject({
  title,
  description,
  tags,
  onClickURL,
  githubURL,
  hostedURL,
}: NormalProjectProps) {
  const [githubStats, setGithubStats] = useState<{
    stars: number;
    forks: number;
  } | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = '650ms ease';
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
  };

  useEffect(() => {
    if (githubURL && githubURL.length > 0) {
      // Extract owner and repo from GitHub URL
      const match = githubURL.match(/github\.com\/([^\/]+)\/([^\/]+)/);
      if (match) {
        const owner = match[1];
        const repo = match[2];
        const cacheKey = `github-stats-${owner}-${repo}`;

        // Check if we have cached data
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const { stats, timestamp } = JSON.parse(cached);
          // Cache for 1 hour
          if (Date.now() - timestamp < 3600000) {
            setGithubStats(stats);
            return;
          }
        }

        // Fetch GitHub stats
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
          .then((response) => {
            if (!response.ok) {
              // Silently fail on rate limit or other errors
              throw new Error(`HTTP ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            if (
              data.stargazers_count !== undefined &&
              data.forks_count !== undefined
            ) {
              const stats = {
                stars: data.stargazers_count,
                forks: data.forks_count,
              };
              setGithubStats(stats);
              // Cache the results
              localStorage.setItem(
                cacheKey,
                JSON.stringify({ stats, timestamp: Date.now() })
              );
            }
          })
          .catch(() => {
            // Silently fail - don't show stats if API fails
          });
      }
    }
  }, [githubURL]);

  return (
    <div
      className="px-5 py-6 md:p-7 bg-slate-800 rounded-md flex-row h-full project cursor-pointer relative overflow-hidden"
      onClick={() => onClickURLHandler(onClickURL)}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(56, 189, 248, 0.3) 70%, hsla(0,0%,0%,0) 100%)',
          backgroundSize: '250% 250%, 100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-100% -100%, 0 0',
          pointerEvents: 'none',
          zIndex: 10
        }}
      />
      <div className="space-y-3 mb-auto h-[88%]">
        <div className="flex justify-between items-center pb-3">
          <div className={"flex space-x-5 text-left"}>
            {githubURL && githubURL.length > 0 && (
              <FiGithub
                className="w-5 h-5 hover:text-sky-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubURL, "_blank");
                }}
              />
            )}
            {hostedURL && hostedURL.length > 0 && (
              <IoMdOpen
                className="w-5 h-5 hover:text-sky-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(hostedURL, "_blank");
                }}
              />
            )}
          </div>

          {githubStats && (githubStats.stars > 0 || githubStats.forks > 0) && (
            <div className="text-xs md:text-xs sfmono-reg flex gap-3 text-gray-400">
              {githubStats.stars > 0 && (
                <span className="flex items-center justify-center gap-1">
                  <FiStar className="w-3 h-3" />
                  <p>{githubStats.stars}</p>
                </span>
              )}
              {githubStats.forks > 0 && (
                <span className="flex items-center justify-center gap-1">
                  <FiGitBranch className="w-3 h-3" />
                  <p>{githubStats.forks}</p>
                </span>
              )}
            </div>
          )}
        </div>

        <p className="calibre-smbold text-[1.4rem] md:text-[1.6rem] text-white leading-8 title">
          {title}
        </p>
        <p className="flex text-sm md:text-base rounded-md leading-6">
          {description}
        </p>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-xs md:text-xs sfmono-reg flex flex-wrap space-x-5">
          {tags.length > 0 &&
            tags.map((tag, idx) => {
              return (
                <span className="capitalize sfmono-reg" key={idx}>
                  {tag}
                </span>
              );
            })}
        </p>
      </div>
    </div>
  );
}

export function Work() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = NormalProjectList.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    const titleMatch = project.title.toLowerCase().includes(searchLower);
    const tagsMatch = project.tags.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    );
    return titleMatch || tagsMatch;
  });

  return (
    <div
      className="justify-center flex items-center mt-[15vh] md:pt-[15vh]"
      id="work"
    >
      <div className="space-y-8 max-w-5xl">
        <SectionTitle sn={"02."} title={"Some Things I've Built"} />
        <div className="calibre-reg pt-2 md:pt-10 sm:text-xs md:text-xl text-gray-300 text-justify space-y-8 md:space-y-32">
          {FeaturedProjectList.map((project: FeaturedProjectsProps, idx) => {
            return (
              <FeaturedProject
                key={idx}
                side={idx % 2 === 0 ? "md:text-right" : "md:text-left"}
                imageURL={project.imageURL}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubURL={project.githubURL}
                hostedURL={project?.hostedURL}
              />
            );
          })}
        </div>

        <div className="calibre-smbold pt-8 md:pt-[28vh] pb-8 sm:text-xs md:text-3xl text-center">
          Other Noteworthy Projects
        </div>

        <div className="flex justify-center pb-2">
          <div className="relative w-full md:w-2/3">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 pt-4 bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:border-sky-500 transition-colors"
              style={{ lineHeight: '1.5' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project: NormalProjectProps, idx) => {
            return (
              <NormalProject
                key={idx}
                title={project.title}
                description={project.description}
                tags={project.tags}
                onClickURL={project.onClickURL}
                githubURL={project.githubURL}
                hostedURL={project?.hostedURL}
              />
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 py-8">
            No projects found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}
