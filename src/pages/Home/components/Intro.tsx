import { onClickEmailHandler } from "./Socials";
import { personalInfo } from "../../../data";
import { useTheme } from "../../../hooks/useTheme";

export function Intro() {
    const { theme } = useTheme();

    return (
        <div
            className="justify-center flex items-center min-h-[85vh] md:min-h-screen relative"
            id="intro"
        >
            {/* Content */}
            <div className='relative z-10 space-y-4 px-8' id="intro-content">
                <p className="sfmono-reg text-lg text-blue-600 dark:text-sky-400  pb-2">{personalInfo.greeting}</p>

                <h1 className="text-[2.2rem] md:text-[4.2rem] text-text-primary">{personalInfo.name}</h1>
                <h2 className="dark:text-slate-400 text-gray-600 text-[1.4rem] md:text-[3.2rem]">{personalInfo.tagline}</h2>

                <p className="calibre-reg sm:text-l md:text-xl dark:text-white text-gray-700 pb-6 text-justify max-w-3xl">
                    {personalInfo.description}
                </p>
                <button
                    className='px-4 py-3 border-2 text-sm md:text-xl rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-sky-700 dark:hover:bg-sky-600 text-white'
                    onClick={() => onClickEmailHandler()}
                >
                    Say Hello !
                </button>
            </div>
        </div>
    )
}