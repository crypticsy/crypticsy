import { IconType } from "react-icons";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function onClickSocialHandler(url: string) {
    window.open(url, "_blank");
}

function SocialIcon({ IconComponent, url }: { IconComponent: IconType, url: string }) {

    return (
        <div className="icon-wrapper h-8 w-8 flex justify-center items-center cursor-pointer "
            onClick={() => onClickSocialHandler(url)} >
            < IconComponent
                className="w-6 h-6 cursor-pointer social-icon" />
        </div>
    )
}

export function LeftSocials() {
    return (
        <div className="fixed bottom-0 left-12 invisible md:visible">
            <div className="space-y-6">
                <SocialIcon IconComponent={MdOutlineEmail} url={'https://www.datacamp.com/portfolio/animeshbasnet'} />
                <SocialIcon IconComponent={FiLinkedin} url={'https://www.linkedin.com/in/animeshbasnet/'} />
                <SocialIcon IconComponent={FiInstagram} url={'https://www.instagram.com/crypticsy/'} />
                <div className="h-[8rem] w-8 justify-center flex mt-4">
                    <div className="bg-white w-0.5 h-full rounded-md" />
                </div>
            </div>
        </div>)
}

export function RightSocials() {
    return (
        <div className="fixed bottom-0 right-12 invisible md:visible">
            <div className="space-y-6">
                <SocialIcon IconComponent={FiGithub} url={'https://github.com/crypticsy/'} />
                <div className="h-[8rem] w-8 justify-center flex mt-4">
                    <div className="bg-white w-0.5 h-full rounded-md" />
                </div>
            </div>
        </div>)
}