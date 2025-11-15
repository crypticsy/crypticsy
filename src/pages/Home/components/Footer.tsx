import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SocialIcon } from "./Socials";


export function Footer() {
    return (
        <div className="items-center space-y-4 mt-[15vh] md:mt-[25vh] mb-[15vh] md:mb-[5vh] mx-8" id="footer">
            <div className="space-x-3 justify-center flex md:hidden" >
                <SocialIcon IconComponent={MdOutlineEmail} url={''} type={'email'} size="small" />
                <SocialIcon IconComponent={FiLinkedin} url={'https://www.linkedin.com/in/animeshbasnet/'} type={'link'} size="small" />
                <SocialIcon IconComponent={FiInstagram} url={'https://www.instagram.com/crypticsy/'} type={'link'} size="small" />
                <SocialIcon IconComponent={FiGithub} url={'https://github.com/crypticsy/'} type={'link'} size="small" />
            </div>
            <div className="flex justify-center ">
                <div className="sfmono-reg text-2xs md:text-xs max-w-4xl text-slate-300 text-center ">
                    {new Date().getFullYear()} Crypticsy © All Rights Reserved
                </div>
            </div>
        </div>
    )
}