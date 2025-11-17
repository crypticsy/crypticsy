import { contactInfo } from "../../../data";
import { onClickEmailHandler } from "./Socials";
import Squares from "../../../components/Squares";

export function Contact() {
    return (
        <div
            className="relative mt-[5vh] md:mt-[10vh] w-full"
            id="contact"
            style={{ minHeight: '600px' }}
        >
            {/* Squares Background - Full Width */}
            <div className="absolute inset-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] w-screen pointer-events-none">
                <Squares
                    speed={0.2}
                    squareSize={40}
                    direction='diagonal'
                    borderColor='#2a2a2a'
                    hoverFillColor='#1a1a1a'
                />
            </div>

            {/* Content */}
            <div className="justify-center flex items-center mx-8 lg:mx-20 relative z-10" style={{ minHeight: '600px' }}>
                <div className="max-w-3xl text-center space-y-6">
                    <h2 className="text-[2rem] md:text-[3.5rem] calibre-smbold">
                        {contactInfo.title}
                    </h2>

                    <p className="calibre-reg text-base md:text-lg text-slate-300 leading-relaxed px-4">
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
