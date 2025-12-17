import { SectionTitle, handleNavLinkClick } from "../../utils";
import { useScrollAnimation } from "../../../hooks";

export function About() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      className="justify-center flex items-center pt-[15vh] mx-8 lg:mx-20"
      id="about"
    >
      <div
        ref={elementRef}
        className={`space-y-8 max-w-5xl opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
      >
        <SectionTitle sn={"01."} title={"About me"} />
        <div className="calibre-reg sm:text-xs md:text-xl max-w-5xl dark:text-gray-200 text-gray-700 text-justify space-y-5">
          <p>
            &emsp; &emsp; I'm a data detective who loves uncovering stories
            behind the numbers. I create fun projects to make daily tasks easier
            for everyone—myself included. When I'm not analyzing data, you'll
            find me doodling or diving into research papers.
          </p>
          <p>
            Above all, I believe education is the most powerful tool we have.
            Whether it's mentoring or sharing knowledge, I'm all in on helping
            build a smarter, more accessible future for everyone.
          </p>
          <table>
            <tbody>
              <tr>
                <td className="pr-4">👨‍💻</td>
                <td>Currently working as an AI Engineer and Research Fellow</td>
              </tr>
              <tr>
                <td>💬</td>
                <td>
                  Let's brainstorm over tech, algorithms, career, and music.
                </td>
              </tr>
              <tr>
                <td>🤔</td>
                <td>
                  Wondering how I got here? Let's just say I've been secretly
                  leveling up with these&nbsp;
                  <a
                    className="cursor-pointer text-blue-600 dark:text-sky-400 hover:text-blue-600 dark:hover:text-sky-400 hover-underline-animation"
                    onClick={() => handleNavLinkClick("/certificates")}
                  >
                    certificates.
                  </a>
                </td>
              </tr>
              <tr>
                <td>⚡</td>
                <td> Fun fact: Oct 31 equals Dec 25 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
