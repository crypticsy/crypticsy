import { IconType } from "react-icons";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export function onClickURLHandler(url: string) {
    window.open(url, "_blank");
}

export function onClickEmailHandler() {
    window.location.href = 'mailto:animesh19basnet@domain.com'
}

export function SocialIcon({ IconComponent, url, type, size='medium' }: { IconComponent: IconType, url: string, type: string, size?: string }) {
    return (
        <div className={"icon-wrapper flex justify-center items-center cursor-pointer hover:text-sky-400" + (size === 'medium' ? " h-8 w-8" : " h-5 w-5") }
            onClick={() => type === "email" ? onClickEmailHandler() : onClickURLHandler(url)} >
            < IconComponent className={"cursor-pointer social-icon"  + (size === 'medium' ? " w-6 h-6" : " w-4 h-4") } />
        </div>
    )
}

export function LeftSocials() {
    return (
        <div className="fixed bottom-0 left-12 invisible md:visible">
            <div className="space-y-6">
                <SocialIcon IconComponent={MdOutlineEmail} url={''} type={'email'} />
                <SocialIcon IconComponent={FiLinkedin} url={'https://www.linkedin.com/in/animeshbasnet/'} type={'link'} />
                <SocialIcon IconComponent={FiInstagram} url={'https://www.instagram.com/crypticsy/'} type={'link'} />
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
                <SocialIcon IconComponent={FiGithub} url={'https://github.com/crypticsy/'} type={'link'} />
                <div className="h-[8rem] w-8 justify-center flex mt-4">
                    <div className="bg-white w-0.5 h-full rounded-md" />
                </div>
            </div>
        </div>)
}