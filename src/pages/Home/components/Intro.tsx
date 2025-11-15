import { onClickEmailHandler } from "./Socials";

export function Intro() {

    return (
        <div className="justify-center flex items-center min-h-screen">
            <div className='space-y-4' id="intro">
                <p className="sfmono-reg text-lg text-sky-400  pb-2">Hi, my name is</p>

                <h1 className="text-[2.2rem] md:text-[4.2rem]">Animesh Singh Basnet</h1>
                <h2 className="text-slate-400 text-[1.4rem] md:text-[3.2rem]">I build things from data.</h2>

                <p className="calibre-reg sm:text-l md:text-xl text-gray-400 pb-6 text-justify max-w-3xl">
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