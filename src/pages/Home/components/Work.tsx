import React, { useState, useEffect, useRef } from "react";
import { SectionTitle } from "../../utils";
import { FiGithub, FiStar, FiGitBranch, FiSearch } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { projects, Project as ProjectProps } from "../../../data";
import { useScrollAnimation } from "../../../hooks";

// Type-cast icons for JSX usage
const GithubIcon = FiGithub as React.ComponentType<{ className?: string; onClick?: (e: React.MouseEvent) => void }>;
const OpenIcon = IoMdOpen as React.ComponentType<{ className?: string; onClick?: (e: React.MouseEvent) => void }>;
const StarIcon = FiStar as React.ComponentType<{ className?: string }>;
const BranchIcon = FiGitBranch as React.ComponentType<{ className?: string }>;
const SearchIcon = FiSearch as React.ComponentType<{ className?: string }>;

function BentoProject({
  title,
  description,
  tags,
  githubURL,
  hostedURL,
  imageURL,
  imagePosition = "top",
  index = 0,
}: ProjectProps & { index?: number }) {
  const [githubStats, setGithubStats] = useState<{
    stars: number;
    forks: number;
  } | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();
  const hasImage = imageURL && imageURL.length > 0;
  const isImageRight = imagePosition === "right" && hasImage;
  const isImageLeft = imagePosition === "left" && hasImage;
  const isImageBottom = imagePosition === "bottom" && hasImage;
  const isHorizontal = isImageRight || isImageLeft;

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
          .catch(() => { });
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
      ref={elementRef}
      className={`dark:bg-slate-800 bg-slate-300 rounded-md project border dark:border-slate-700 border-gray-300 ${(githubURL || hostedURL) && " cursor-pointer "
        } relative overflow-hidden group flex flex-col transition-all duration-300 hover:ring-1 hover:ring-blue-600 dark:hover:ring-sky-600 ${hasImage
          ? isImageRight
            ? "md:col-span-2 md:row-span-1 md:flex-row-reverse" // Horizontal: wide, image on RIGHT
            : isImageLeft
              ? "md:col-span-2 md:row-span-1 md:flex-row" // Horizontal: wide, image on LEFT
              : isImageBottom
                ? "md:row-span-2 md:flex-col-reverse" // Vertical: tall, image on BOTTOM
                : "md:row-span-2 md:flex-col" // Vertical: tall, image on TOP (default)
          : ""
        } opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.01}s` }}
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
            "linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(37, 99, 235, 0.3) 70%, hsla(0,0%,0%,0) 100%)",
          backgroundSize: "250% 250%, 100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-100% -100%, 0 0",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {hasImage && (
        <div
          className={`overflow-hidden ${isHorizontal
              ? "w-full h-48 md:w-1/2 md:h-full"
              : "w-full h-48 md:h-64"
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
        className={`p-5 flex-1 flex flex-col ${isHorizontal ? "w-full md:w-1/2" : ""
          }`}
      >
        <div className="space-y-3 flex-1">
          <p className="calibre-smbold text-[1.4rem] md:text-[1.6rem] dark:text-white text-gray-900 leading-8 title">
            {title}
          </p>

          <p className="text-sm md:text-base rounded-md leading-6 dark:text-gray-300 text-gray-700">
            {description}
          </p>
        </div>

        <div className="flex justify-between items-center pt-6 pb-2">
          <div className="flex space-x-5 text-left">
            {githubURL && githubURL.length > 0 && (
              <GithubIcon
                className="w-5 h-5 hover:text-blue-600 dark:hover:text-sky-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(githubURL, "_blank");
                }}
              />
            )}
            {hostedURL && hostedURL.length > 0 && (
              <OpenIcon
                className="w-5 h-5 hover:text-blue-600 dark:hover:text-sky-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(hostedURL, "_blank");
                }}
              />
            )}
          </div>

          {githubStats && (githubStats.stars > 0 || githubStats.forks > 0) && (
            <div className="text-sm sfmono-reg flex gap-3 text-gray-500/60">
              {githubStats.stars > 0 && (
                <div className="flex items-center gap-1">
                  <StarIcon className="w-4 h-4 align-middle" />
                  <p className="leading-none pt-1">{githubStats.stars}</p>
                </div>
              )}
              {githubStats.forks > 0 && (
                <div className="flex items-center gap-1">
                  <BranchIcon className="w-4 h-4 align-middle" />
                  <p className="leading-none pt-1">{githubStats.forks}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-4">
          <p className="text-xs sfmono-reg flex flex-wrap gap-x-3 gap-y-2">
            {tags.length > 0 &&
              tags.map((tag, idx) => (
                <span
                  className="capitalize dark:bg-black/20 bg-gray-200 p-1.5 px-3 rounded-lg"
                  key={idx}
                >
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
  const { elementRef, isVisible } = useScrollAnimation();

  const filteredProjects = projects.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    const titleMatch = project.title.toLowerCase().includes(searchLower);
    const tagsMatch = project.tags.some((tag) =>
      tag.toLowerCase().includes(searchLower)
    );
    return titleMatch || tagsMatch;
  });

  return (
    <div
      className="justify-center flex items-center mt-[15vh] md:pt-[15vh] mx-8 lg:mx-20"
      id="work"
    >
      <div className="space-y-8 max-w-6xl xl:max-w-full w-full">
        <div
          ref={elementRef}
          className={`max-w-5xl m-auto opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
        >
          <SectionTitle sn={"02."} title={"Things I've Built"} />
        </div>

        <div className="flex justify-center pb-6">
          <div className="relative w-full md:max-w-5xl">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 pt-4 dark:bg-slate-800 bg-slate-200 dark:text-white text-gray-900 rounded-md border dark:border-slate-700 border-gray-300 focus:outline-none focus:border-blue-600 dark:focus:border-sky-500 transition-colors dark:placeholder:text-gray-400 placeholder:text-gray-500"
              style={{ lineHeight: "1.5" }}
            />
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-7 auto-rows-[minmax(280px,auto)] px-4 lg:px-0">
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
              index={idx}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 py-8">
            No projects found matching "{searchTerm}"
          </div>
        )}

        <div className="flex justify-center pt-8 pb-4">
          <button
            onClick={() =>
              window.open("https://github.com/crypticsy/", "_blank")
            }
            className="flex items-center px-6 py-4 bg-transparent dark:hover:bg-slate-800 hover:bg-gray-100 dark:text-slate-300 text-gray-700 hover:text-blue-600 dark:hover:text-sky-500 rounded-xl border-2 border-solid dark:border-slate-700 border-gray-300 hover:border-blue-600 dark:hover:border-sky-500 transition-all duration-300 sfmono-reg group"
          >
            More projects on GitHub &nbsp;
            <GithubIcon className="w-5 h-5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
