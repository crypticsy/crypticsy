import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SocialIcon } from "./Socials";


export function Footer() {
    return (
        <div className="items-center space-y-4 mt-[15vh] md:mt-[18vh] mb-[20vh] md:mb-[5vh] mx-8 lg:mx-20" id="footer">
            <div className="space-x-3 justify-center flex lg:hidden" >
                <SocialIcon IconComponent={MdOutlineEmail} url={''} type={'email'} size="small" />
                <SocialIcon IconComponent={FiLinkedin} url={'https://www.linkedin.com/in/animeshbasnet/'} type={'link'} size="small" />
                <SocialIcon IconComponent={FiInstagram} url={'https://www.instagram.com/crypticsy/'} type={'link'} size="small" />
                <SocialIcon IconComponent={FiGithub} url={'https://github.com/crypticsy/'} type={'link'} size="small" />
            </div>
            <div className="flex justify-center">
                <div className="max-w-4xl w-full">
                    <div className="sfmono-reg text-2xs md:text-xs text-slate-300 text-center">
                        Copyright © {new Date().getFullYear()}  Crypticsy. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}