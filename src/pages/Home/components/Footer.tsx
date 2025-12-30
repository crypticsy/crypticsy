import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaUnsplash } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SocialIcon } from "./Socials";
import { socialLinks, personalInfo } from "../../../data";


export function Footer() {
    return (
        <div className="items-center space-y-4 mt-[5vh] md:mt-[2vh] mb-[20vh] md:mb-[5vh] mx-8 lg:mx-20" id="footer">
            <div className="space-x-3 justify-center flex lg:hidden" >
                <SocialIcon IconComponent={MdOutlineEmail} url={''} type={'email'} size="small" />
                <SocialIcon IconComponent={FiLinkedin} url={socialLinks.linkedin} type={'link'} size="small" />
                <SocialIcon IconComponent={FiInstagram} url={socialLinks.instagram} type={'link'} size="small" />
                <SocialIcon IconComponent={FaUnsplash} url={socialLinks.unsplash} type={'link'} size="small" />
                <SocialIcon IconComponent={FiGithub} url={socialLinks.github} type={'link'} size="small" />
            </div>
            <div className="flex justify-center">
                <div className="max-w-4xl w-full">
                    <div className="sfmono-reg text-2xs md:text-xs dark:text-slate-300 text-gray-600 text-center">
                        Copyright © {new Date().getFullYear()}  {personalInfo.copyright}. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}