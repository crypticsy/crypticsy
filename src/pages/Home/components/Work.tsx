import { useState, useEffect, useRef } from "react";
import { SectionTitle } from "../../utils";
import { FiGithub, FiStar, FiGitBranch, FiSearch } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";

import gragoPreview from "../../../assets/projects/grago.jpeg";
import snadderPreview from "../../../assets/projects/snadder.webp";

type ImagePosition = "top" | "right" | "bottom" | "left";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  githubURL?: string;
  hostedURL?: string;
  imageURL?: string;
  imagePosition?: ImagePosition;
};

const AllProjects: ProjectProps[] = [
  {
    title: "Snadder",
    description:
      "Snadder is a spin on the popular Snakes 'n Ladders game, combining the problem-solving ability of Sudoku and the user experience of Wordle, developed during my tenure at Bhoos.",
    tags: ["Python", "React", "Tailwind"],
    imageURL: snadderPreview,
    hostedURL: "https://snadder.io/",
    imagePosition: "top",
  },
  {
    title: "Pocket Booth",
    description:
      "A pocket-sized digital photo booth application that allows users to capture instant photo strips and store them locally.",
    tags: ["Camera", "Google-oauth", "Typescript"],
    imageURL: "https://crypticsy.github.io/pocket-booth/home_screen.png",
    githubURL: "https://github.com/crypticsy/pocket-booth",
    hostedURL: "https://crypticsy.github.io/pocket-booth/",
    imagePosition: "right",
  },
  {
    title: "Sanctuary.io",
    description:
      "A compilation of modest p5.js projects conceived during moments of leisure, ignited by a sense of curiosity.",
    tags: ["P5JS", "Javascript"],
    githubURL: "https://github.com/crypticsy/sanctuary",
    hostedURL: "https://crypticsy.github.io/sanctuary/",
  },
  {
    title: "From Me to You",
    description:
      "A web application for sending heartfelt digital letters to friends and loved ones.",
    tags: ["Typescript", "TailwindCSS"],
    githubURL: "https://github.com/crypticsy/from-me-to-you",
    hostedURL: "https://crypticsy.github.io/from-me-to-you/",
  },
  {
    title: "Vision Caster",
    description:
      "An interactive image analysis system for the visually impaired. It uses the BLIP model on a Raspberry Pi to process images and give real-time descriptive captions and auditory feedback.",
    tags: ["RasberryPi", "Transformers", "Azure"],
    githubURL: "https://github.com/crypticsy/VisionCaster",
  },
  {
    title: "Ropey DVD Management System",
    description:
      "An inventory and rental management system developed in ASP.NET MVC Framework that has multiple level of access based on user level, as well as an interactive user interface to help with the leasing process of DVD within the store.",
    tags: ["ASP.NET", "MVC", "Bootstrap"],
    githubURL: "https://github.com/crypticsy/RopeyDVDManagementSystem",
  },
  {
    title: "Grago",
    description:
      "Grago, 'Graph on the go', is a graphical visualization tool designed for enthusiasts aiming to bolster the utilization of data analysis within the endeavors of local businesses and startups, developed as a final year project during my undergraduate study.",
    tags: ["Django", "Postgresql", "Data Science"],
    imageURL: gragoPreview,
    imagePosition: "top",
  },
  {
    title: "HAR System",
    description:
      "Human Activity Recognition (HAR) system designed to process and analyze sensor data to recognize human activities using XGBoost for the CASAS Smart Home Data Set - Dataset 17.",
    tags: ["Streamlit", "XGBoost"],
    imageURL:
      "https://github.com/crypticsy/human-activity-recognition/blob/master/Images/demo.gif?raw=true",
    githubURL: "https://github.com/crypticsy/human-activity-recognition",
    imagePosition: "right",
  },
  {
    title: "The Marauder's Map",
    description:
      "A web application inspired by the Marauder's Map from the Harry Potter universe, enabling users to explore a digital map of Hogwarts with moving footprints and hidden rooms.",
    tags: ["React-Three-Fiber", "Typescript"],
    imageURL: "https://crypticsy.github.io/the-marauders-map/main_screen.png",
    githubURL: "https://github.com/crypticsy/the-marauders-map",
    hostedURL: "https://crypticsy.github.io/the-marauders-map/",
    imagePosition: "bottom",
  },
  {
    title: "Chess Engine",
    description:
      "A full fledge chess game developed using pygame, and contains an ai engine that utilizes the minimax and alpha beta pruning algorithms to offer an immersive player-versus-bot experience.",
    tags: ["Python", "PyGame", "Algorithm"],
    githubURL:
      "https://github.com/crypticsy/Playground/tree/master/Game_Engine/Chess/",
  },
  {
    title: "Animated Movie Ontology",
    description:
      "A semantic programming application tailored for the animated film industry that organizes and analyzes complex data sets from animated films, leveraging ontologies and RDF files to facilitate this process.",
    tags: ["Semantics", "Protege", "Streamlit"],
    githubURL:
      "https://github.com/crypticsy/Academia/tree/master/Animated_Movie_Ontology",
  },
  {
    title: "Path Visualizer",
    description:
      "A python project to visualize search algorithms on a grid,  built using the flask framework and the front-end is built using HTML, CSS and JavaScript, as well as uses tailwindcss for styling.",
    tags: ["Flask", "Javascript", "TailwindCSS"],
    githubURL: "https://github.com/crypticsy/PathVisualizer",
    hostedURL: "https://path-visualizer-crypticsy.vercel.app/",
  },
];

function BentoProject({
  title,
  description,
  tags,
  githubURL,
  hostedURL,
  imageURL,
  imagePosition = "top",
}: ProjectProps) {
  const [githubStats, setGithubStats] = useState<{
    stars: number;
    forks: number;
  } | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const hasImage = imageURL && imageURL.length > 0;
  const isImageRight = imagePosition === "right" && hasImage;
  const isImageLeft = imagePosition === "left" && hasImage;
  const isImageBottom = imagePosition === "bottom" && hasImage;
  const isHorizontal = (isImageRight || isImageLeft);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";
    el.style.transition = "650ms ease";
    el.style.backgroundPosition = "100% 100%, 0 0";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";
  };

  useEffect(() => {
    if (githubURL && githubURL.length > 0) {
      const match = githubURL.match(/github\.com\/([^\/]+)\/([^\/]+)/);
      if (match) {
        const owner = match[1];
        const repo = match[2];
        const cacheKey = `github-stats-${owner}-${repo}`;

        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const { stats, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 3600000) {
            setGithubStats(stats);
            return;
          }
        }

        fetch(`https://api.github.com/repos/${owner}/${repo}`)
          .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
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
              localStorage.setItem(
                cacheKey,
                JSON.stringify({ stats, timestamp: Date.now() })
              );
            }
          })
          .catch(() => {});
      }
    }
  }, [githubURL]);

  const clickHandler = () => {
    if (hostedURL) {
      window.open(hostedURL, "_blank");
    } else if (githubURL) {
      window.open(githubURL, "_blank");
    }
  };

  return (
    <div
      className={`bg-slate-800 rounded-md project cursor-pointer relative overflow-hidden group flex flex-col ${
        hasImage
          ? isImageRight
            ? "md:col-span-2 md:row-span-1 md:flex-row-reverse" // Horizontal: wide, image on RIGHT
            : isImageLeft
            ? "md:col-span-2 md:row-span-1 md:flex-row" // Horizontal: wide, image on LEFT
            : isImageBottom
            ? "md:row-span-2 md:flex-col-reverse" // Vertical: tall, image on BOTTOM
            : "md:row-span-2 md:flex-col" // Vertical: tall, image on TOP (default)
          : ""
      }`}
      onClick={clickHandler}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(56, 189, 248, 0.3) 70%, hsla(0,0%,0%,0) 100%)",
          backgroundSize: "250% 250%, 100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-100% -100%, 0 0",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {hasImage && (
        <div
          className={`overflow-hidden ${
            isHorizontal ? "w-full h-48 md:w-1/2 md:h-full" : "w-full h-48 md:h-64"
          }`}
        >
          <img
            src={imageURL}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div
        className={`px-5 py-6 md:p-7 flex-1 flex flex-col ${
          isHorizontal ? "w-full md:w-1/2" : ""
        }`}
      >
        <div className="space-y-3 flex-1">
          <div className="flex justify-between items-center pb-2">
            <div className="flex space-x-5 text-left">
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

            {githubStats &&
              (githubStats.stars > 0 || githubStats.forks > 0) && (
                <div className="text-sm sfmono-reg flex gap-3 text-gray-300">
                  {githubStats.stars > 0 && (
                    <span className="flex items-center gap-1">
                      <FiStar className="w-4 h-4" />
                      <p>{githubStats.stars}</p>
                    </span>
                  )}
                  {githubStats.forks > 0 && (
                    <span className="flex items-center gap-1">
                      <FiGitBranch className="w-4 h-4" />
                      <p>{githubStats.forks}</p>
                    </span>
                  )}
                </div>
              )}
          </div>

          <p className="calibre-smbold text-[1.4rem] md:text-[1.6rem] text-white leading-8 title">
            {title}
          </p>
          <p className="text-sm md:text-base rounded-md leading-6">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-xs sfmono-reg flex flex-wrap gap-x-5 gap-y-2">
            {tags.length > 0 &&
              tags.map((tag, idx) => (
                <span className="capitalize" key={idx}>
                  {tag}
                </span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = AllProjects.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    const titleMatch = project.title.toLowerCase().includes(searchLower);
    const tagsMatch = project.tags.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    );
    return titleMatch || tagsMatch;
  });

  return (
    <div
      className="justify-center flex items-center mt-[15vh] md:pt-[15vh] mx-8"
      id="work"
    >
      <div className="space-y-8 max-w-6xl w-full">
        <div className="max-w-5xl m-auto">
          <SectionTitle sn={"02."} title={"Things I've Built"} />
        </div>

        <div className="flex justify-center pb-6 pt-4">
          <div className="relative w-full md:max-w-5xl">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 pt-4 bg-slate-800 text-white rounded-md border border-slate-700 focus:outline-none focus:border-sky-500 transition-colors"
              style={{ lineHeight: "1.5" }}
            />
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)] px-4 md:px-0">
          {filteredProjects.map((project, idx) => (
            <BentoProject
              key={idx}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubURL={project.githubURL}
              hostedURL={project.hostedURL}
              imageURL={project.imageURL}
              imagePosition={project.imagePosition}
            />
          ))}
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
