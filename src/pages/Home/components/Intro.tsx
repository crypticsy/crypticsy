import { useState, useEffect } from "react";
import { onClickEmailHandler } from "./Socials";
import { personalInfo } from "../../../data";
import { useTheme } from "../../../hooks/useTheme";
import { PixelBlast } from "../../../components/PixelBlast";

const TYPING_SPEED = 60;
const DELETING_SPEED = 35;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

function useTypewriter(phrases: string[]) {
    const [displayed, setDisplayed] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = phrases[phraseIndex];

        if (!isDeleting && displayed === current) {
            const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && displayed === "") {
            const timeout = setTimeout(() => {
                setIsDeleting(false);
                setPhraseIndex((i) => (i + 1) % phrases.length);
            }, PAUSE_AFTER_DELETE);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setDisplayed(isDeleting
                ? current.slice(0, displayed.length - 1)
                : current.slice(0, displayed.length + 1)
            );
        }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, phraseIndex, phrases]);

    return displayed;
}

export function Intro() {
    const { theme } = useTheme();
    const tagline = useTypewriter(personalInfo.taglines);

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
                <h2 className="dark:text-gray-300/60 text-gray-500/80 text-[1.4rem] md:text-[3.2rem]">
                    {tagline}
                    <span className="inline-block w-[2px] h-[1.2em] ml-1 align-middle bg-current animate-[blink_1s_step-end_infinite] text-blue-400 dark:text-sky-400" />
                </h2>

                <p className="calibre-reg sm:text-l md:text-xl dark:text-white text-gray-700 pb-6 text-justify max-w-3xl">
                    {personalInfo.description}
                </p>
            </div>
        </div>
    )
}