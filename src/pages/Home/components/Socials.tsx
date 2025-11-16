import { IconType } from "react-icons";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export function onClickURLHandler(url: string) {
    window.open(url, "_blank");
}

export function onClickEmailHandler() {
    window.location.href = 'mailto:contact@animeshbasnet.com.np'
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
        <div className="invisible lg:visible self-end sticky bottom-0 pl-6 lg:pl-10 xl:pl-12">
            <div className="grid grid-rows-[auto_auto_auto_1fr] gap-6">
                <SocialIcon IconComponent={MdOutlineEmail} url={''} type={'email'} />
                <SocialIcon IconComponent={FiLinkedin} url={'https://www.linkedin.com/in/animeshbasnet/'} type={'link'} />
                <SocialIcon IconComponent={FiInstagram} url={'https://www.instagram.com/crypticsy/'} type={'link'} />
                <div className="h-[8rem] w-8 justify-center flex">
                    <div className="bg-white w-0.5 h-full rounded-md" />
                </div>
            </div>
        </div>)
}

export function RightSocials() {
    return (
        <div className="invisible lg:visible self-end sticky bottom-0 pr-6 lg:pr-10 xl:pr-12">
            <div className="grid grid-rows-[auto_1fr] gap-6">
                <SocialIcon IconComponent={FiGithub} url={'https://github.com/crypticsy/'} type={'link'} />
                <div className="h-[8rem] w-8 justify-center flex">
                    <div className="bg-white w-0.5 h-full rounded-md" />
                </div>
            </div>
        </div>)
}