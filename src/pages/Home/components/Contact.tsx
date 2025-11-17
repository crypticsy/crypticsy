import { contactInfo } from "../../../data";
import { onClickEmailHandler } from "./Socials";
import Squares from "../../../components/Squares";
import { useTheme } from "../../../contexts/ThemeContext";

export function Contact() {
    const { theme } = useTheme();

    return (
        <div
            className="relative mt-[5vh] md:mt-[10vh] w-full"
            id="contact"
            style={{ minHeight: '600px' }}
        >
            {/* Squares Background - Full Width - Theme Aware */}
            <div className="absolute inset-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] w-screen pointer-events-none">
                <Squares
                    key={theme}
                    speed={0.2}
                    squareSize={40}
                    direction='diagonal'
                    borderColor={theme === 'dark' ? '#2a2a2a' : '#d5e2f5'}
                    hoverFillColor={theme === 'dark' ? '#1a1a1a' : '#cbd5e1'}
                    backgroundColor={theme === 'dark' ? '#171717' : '#f1f5f9'}
                />
            </div>

            {/* Content */}
            <div className="justify-center flex items-center mx-8 lg:mx-20 relative z-10" style={{ minHeight: '600px' }}>
                <div className="max-w-3xl text-center space-y-6">
                    <h2 className="text-[2rem] md:text-[3.5rem] calibre-smbold text-text-primary">
                        {contactInfo.title}
                    </h2>

                    <p className="calibre-reg text-base md:text-lg dark:text-slate-300 text-gray-600 leading-relaxed px-4">
                        {contactInfo.description}
                    </p>

                    <div className="pt-8">
                        <button
                            className='px-6 py-4 border-2 text-base md:text-lg border-sky-400 text-sky-400 rounded-md'
                            onClick={() => onClickEmailHandler()}
                        >
                            {contactInfo.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
