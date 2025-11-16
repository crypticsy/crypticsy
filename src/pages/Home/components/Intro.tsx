import { useState, useEffect } from "react";
import { onClickEmailHandler } from "./Socials";
import PixelBlast from "../../../components/PixelBlast";

export function Intro() {
    const [pixelSize, setPixelSize] = useState(6);

    useEffect(() => {
        const updatePixelSize = () => {
            setPixelSize(window.innerWidth < 768 ? 3 : 6);
        };

        // Set initial size
        updatePixelSize();

        // Update on resize
        window.addEventListener('resize', updatePixelSize);
        return () => window.removeEventListener('resize', updatePixelSize);
    }, []);

    return (
        <div
            className="justify-center flex items-center min-h-screen relative"
            id="intro"
        >
            {/* PixelBlast Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <PixelBlast
                    variant="circle"
                    pixelSize={pixelSize}
                    color="#51369C"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0}
                    transparent
                />
            </div>

            {/* Gradient background overlay */}
            <div
                className="absolute inset-0 transition-all duration-500 ease-in-out z-[5] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 70% at center, rgba(23, 23, 23, 0.8) 0%, rgba(23, 23, 23, 0.7) 20%, rgba(23, 23, 23, 0.5) 35%, rgba(23, 23, 23, 0.35) 50%, rgba(23, 23, 23, 0.2) 65%, rgba(23, 23, 23, 0.1) 80%, transparent 92%, transparent 100%)'
                }}
            />

            {/* Content */}
            <div className='relative z-10 space-y-4 px-8' id="intro-content">
                <p className="sfmono-reg text-lg text-sky-400  pb-2">Hi, my name is</p>

                <h1 className="text-[2.2rem] md:text-[4.2rem]">Animesh Singh Basnet</h1>
                <h2 className="text-slate-400 text-[1.4rem] md:text-[3.2rem]">I build things from data.</h2>

                <p className="calibre-reg sm:text-l md:text-xl text-white pb-6 text-justify max-w-3xl">
                    I'm a programmer specializing in building (and occasionally designing).
                    Currently, I'm focused on researching and developing Machine Learning and Large Language Models.
                </p>
                <button
                    className='px-4 py-3 border-2 text-sm md:text-xl  border-sky-400 text-sky-400 rounded-md'
                    onClick={() => onClickEmailHandler()}
                >
                    Say Hello !
                </button>
            </div>
        </div>
    )
}