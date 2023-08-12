import { FiDownload } from "react-icons/fi";
import { SectionTitle, handleDownload } from "../../utils";

export function About() {

    return (
        <div className="justify-center flex items-center min-h-screen">
            <div className='space-y-8' id="about">

                < SectionTitle sn={'01.'} title={'About me'} />
                <div className="calibre-reg sm:text-xs md:text-xl  max-w-4xl text-gray-400 text-justify space-y-5">
                    <p>
                        &emsp; &emsp; In the realm of data, I approach each challenge with a mindset akin to Alan Turing's insatiable curiosity, determined to
                        decipher and connect the narrative within the numbers. I embrace new challenges and continuously seek to expand my skill set,
                        be it enlivening the most mundane data through visualization, optimizing scripts with algorithms, or building games using an
                        unfamiliar platform.
                    </p>
                    <table>
                        <tr>
                            <td className="pr-4">🔭</td>
                            <td>
                                I'm currently working as a Data Analyst at &nbsp;
                                <a
                                    className='cursor-pointer text-sky-400 hover:text-sky-400 hover-underline-animation'
                                    href="https://www.bhoos.com/about/"
                                    target="_blank">
                                    Bhoos Games.
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>🌱</td>
                            <td> I'm currently learning React Native, and Tableau. </td>
                        </tr>
                        <tr>
                            <td>🤔</td>
                            <td> Curious how I landed here? Let's just say online courses are my not-so-secret weapons! </td>
                        </tr>
                        <tr>
                            <td>💬</td>
                            <td> Brainstorm with me over anime, algorithms, career, and music. </td>
                        </tr>
                        <tr>
                            <td>⚡</td>
                            <td> Fun fact: Oct 31 equals Dec 25 </td>
                        </tr>
                    </table>
                </div>

                <div className="flex">
                    <button
                        className='px-5 py-3 border-2  border-sky-400 text-sky-400 rounded-md text-sm flex items-center'
                        onClick={() => handleDownload('CV.pdf')}
                    >
                        <FiDownload className="mr-3 w-4 h-4" />
                        <span className="my-auto">Download CV</span>
                    </button>
                </div>
            </div>
        </div>
    )
}