import { onClickEmailHandler } from "./Socials";
import { personalInfo } from "../../../data";
import { useTheme } from "../../../hooks/useTheme";
import { PixelBlast } from "../../../components/PixelBlast";

export function Intro() {
    const { theme } = useTheme();

    return (
        <div
            className="justify-center flex items-center min-h-[85vh] md:min-h-screen relative"
            id="intro"
        >
            <PixelBlast
                pixelSize={24}
                color={theme === 'dark' ? "#51369C" : "#c5cffa"}
                patternScale={1.5}
                patternDensity={0.6}
                pixelSizeJitter={0.4}
                enableRipples
                rippleSpeed={0.3}
                rippleThickness={0.12}
                rippleIntensityScale={1.2}
                speed={0.4}
            />


            {/* Gradient background overlay - Dark theme */}
            <div
                className="absolute inset-0 ease-in-out z-[5] pointer-events-none dark:opacity-100 opacity-0"
                style={{
                    background: 'radial-gradient(ellipse 70% 70% at center, rgba(23, 23, 23, 0.8) 0%, rgba(23, 23, 23, 0.7) 20%, rgba(23, 23, 23, 0.5) 35%, rgba(23, 23, 23, 0.35) 50%, rgba(23, 23, 23, 0.2) 65%, rgba(23, 23, 23, 0.1) 80%, transparent 92%, transparent 100%)'
                }}
            />

            {/* Gradient background overlay - Light theme */}
            <div
                className="absolute inset-0 ease-in-out z-[5] pointer-events-none dark:opacity-0 opacity-100"
                style={{
                    background: 'radial-gradient(ellipse 70% 70% at center, rgba(241, 245, 249, 0.95) 0%, rgba(241, 245, 249, 0.85) 20%, rgba(241, 245, 249, 0.7) 35%, rgba(241, 245, 249, 0.5) 50%, rgba(241, 245, 249, 0.3) 65%, rgba(241, 245, 249, 0.15) 80%, transparent 92%, transparent 100%)'
                }}
            />
            
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