import { SectionTitle } from "../../utils"

export function About() {

    return (
        <div className="justify-center flex items-center min-h-screen">
            <div className='max-w-[90%] space-y-8' id="about">
                < SectionTitle sn={'01.'} title={'About me'} />
                
                <div className="calibre-reg sm:text-xs md:text-xl  max-w-4xl text-gray-400 text-justify space-y-5">
                    <p>
                        In the realm of data, I approach each challenge with a mindset akin to Alan Turing's insatiable curiosity, determined to
                        decipher and connect the narrative within the numbers. I embrace new challenges and continuously seek to expand my skill set,
                        be it enlivening the most mundane data through visualization, optimizing scripts with algorithms, or building games using an
                        unfamiliar platform.
                    </p>
                    <ul className="space-y-2">
                        <li>
                            🔭 &nbsp; I'm currently working as a Data Analyst at &nbsp;
                            <a
                            className='cursor-pointer text-sky-400 hover:text-sky-400 hover-underline-animation'
                            href="https://www.bhoos.com/about/"
                            target="_blank">
                                Bhoos Games.
                            </a>
                        </li>
                        <li>🌱 &nbsp; I'm currently learning React Native, and Tableau.</li>
                        <li>🤔 &nbsp; Curious how I landed here? Let's just say online courses are my not-so-secret weapons!</li>
                        <li>💬 &nbsp; Brainstorm with me over anime, algorithms, career, and music.</li>
                        <li>⚡ &nbsp; Fun fact: Oct 31 equals Dec 25</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}