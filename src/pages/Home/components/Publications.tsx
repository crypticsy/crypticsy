import { useRef } from "react";
import { SectionTitle } from "../../utils";
import himalayanJavaCaseStudyImage from "../../../assets/publication/himalayanJavaCaseStudy.png";
import digital_threats from "../../../assets/publication/digital_threats.jpg";

type PulicationProp = {
  title: string;
  subtitle?: string;
  type: string;
  publishedDate: Date;
  publicationURL: string;
  publicationImage: string;
};

function formatDate(date: Date) {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

const publicaitonList = [
  {
    title: "APT Attribution Using Deep Reinforcement Learning",
    subtitle:
      "This paper investigates the application of DRL for attributing APT groups through detailed behavioural analysis.",
    type: "Research Paper",
    publishedDate: new Date(2025, 9, 29),
    publicationURL: "https://dl.acm.org/doi/10.1145/3736654",
    publicationImage: digital_threats,
  },
  {
    title: "Himalayan Java",
    subtitle:
      "Navigating Challenges and Pioneering Sustainability in Nepali Coffee Industry",
    type: "A Case Study",
    publishedDate: new Date(2023, 7, 1),
    publicationURL: "https://parthstudent.vc/case-study/",
    publicationImage: himalayanJavaCaseStudyImage,
  },
];

function Publication(publication: PulicationProp) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div
      className="bg-slate-800 rounded-md overflow-hidden h-full cursor-pointer relative group transition-all duration-300 hover:ring-1 hover:ring-sky-600"
      onClick={() => window.open(publication.publicationURL, "_blank")}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div className="w-full h-full overflow-hidden relative">
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
        <img
          className="w-full h-full object-cover"
          src={publication.publicationImage}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-slate-800 px-5 py-6 md:p-7 flex flex-col transition-all duration-500 ease-in-out group-hover:h-auto z-20" style={{ minHeight: 'fit-content' }}>
        <div className="calibre-smbold mb-2 text-left">{publication.title}</div>
        {publication.subtitle && (
          <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className="text-sm md:text-base text-left pb-2">
              {publication.subtitle}
            </div>
          </div>
        )}
        <div className="flex sfmono-reg text-xs md:text-xs mt-4">
          <div className="mr-auto">{publication.type}</div>
          <div className="">{formatDate(publication.publishedDate)}</div>
        </div>
      </div>
    </div>
  );
}

export function Publications() {
  return (
    <div
      className="justify-center flex items-center mt-[15vh] md:pt-[15vh] mx-8"
      id="publications"
    >
      <div className="space-y-8 max-w-6xl">
        <div className="max-w-5xl m-auto">
          <SectionTitle sn={"03."} title={"Publications"} />
        </div>
        <div className="calibre-reg pt-2 md:pt-10 sm:text-xs md:text-xl text-gray-300 text-justify space-y-8 md:space-y-32 w-full">
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
            {publicaitonList.map((publication, idx) => (
              <Publication key={idx} {...publication} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
