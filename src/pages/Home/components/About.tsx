import { FiDownload } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { SectionTitle, handleDownload, handleNavLinkClick } from "../../utils";

export function About() {
  return (
    <div className="justify-center flex items-center pt-[15vh]" id="about">
      <div className="space-y-8">
        <SectionTitle sn={"01."} title={"About me"} />
        <div className="calibre-reg sm:text-xs md:text-xl max-w-4xl text-gray-400 text-justify space-y-5">
          <p>
            &emsp; &emsp; A visionary and adaptable professional with expertise
            in data analysis, programming, and software development. Skilled in
            using advanced analytical tools, developing efficient pipelines,
            designing scalable software solutions, and integrating machine
            learning models to enhance decision-making and business outcomes. An
            effective team player who thrives in dynamic settings and keen to
            tackle challenges that promote both organisational and personal
            growth.
          </p>
          <table>
            <tbody>
              <tr>
                <td className="pr-4">🔭</td>
                <td>
                  I'm currently seeking opportunities within the field of
                  Machine Learning and Large Language Models.
                </td>
              </tr>
              <tr>
                <td>🤔</td>
                <td>
                  Curious how I landed here? Let's just say&nbsp;
                  <a
                    className="cursor-pointer text-sky-400 hover:text-sky-400 hover-underline-animation"
                    onClick={() => handleNavLinkClick("/certificates")}
                  >
                    online courses
                  </a>
                  &nbsp;are my not-so-secret weapons!
                </td>
              </tr>
              <tr>
                <td>💬</td>
                <td>
                  {" "}
                  Brainstorm with me over anime, algorithms, career, and music.{" "}
                </td>
              </tr>
              <tr>
                <td>⚡</td>
                <td> Fun fact: Oct 31 equals Dec 25 </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex space-x-3 md:space-x-6">
          <button
            className="px-2 md:px-5 py-3 border-2 border-sky-400 text-sky-400 rounded-md text-sm flex items-center"
            onClick={() => handleNavLinkClick("/certificates")}
          >
            <GrCertificate className="mr-3 w-4 h-4 grIcon" />
            <span className="my-auto sfmono-reg ">Certifications</span>
          </button>
        </div>
      </div>
    </div>
  );
}
