import React from "react";
import { IconType } from "react-icons";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaUnsplash } from "react-icons/fa";
import { socialLinks } from "../../../data";

export function onClickURLHandler(url: string) {
    window.open(url, "_blank");
}

export function onClickEmailHandler() {
    window.location.href = `mailto:${socialLinks.email}`;
}

export function SocialIcon({ IconComponent, url, type, size = 'medium' }: { IconComponent: IconType, url: string, type: string, size?: string }) {
    const Icon = IconComponent as React.ComponentType<{ className?: string }>;
    return (
        <div className={"icon-wrapper flex justify-center items-center cursor-pointer hover:text-blue-600 dark:hover:text-sky-400" + (size === 'medium' ? " h-8 w-8" : " h-5 w-5")}
            onClick={() => type === "email" ? onClickEmailHandler() : onClickURLHandler(url)} >
            <Icon className={"cursor-pointer social-icon" + (size === 'medium' ? " w-6 h-6" : " w-4 h-4")} />
        </div>
    )
}

export function LeftSocials() {
    return (
        <div className="hidden lg:block self-end sticky bottom-0 pl-6 lg:pl-10 xl:pl-12 z-20">
            <div className="grid grid-rows-[auto_auto_auto_1fr] gap-6">
                <SocialIcon IconComponent={MdOutlineEmail} url={''} type={'email'} />
                <SocialIcon IconComponent={FiLinkedin} url={socialLinks.linkedin} type={'link'} />
                <SocialIcon IconComponent={FiInstagram} url={socialLinks.instagram} type={'link'} />
                <div className="h-[8rem] w-8 justify-center flex">
                    <div className="dark:bg-white bg-black w-0.5 h-full rounded-md" />
                </div>
            </div>
        </div>)
}

export function RightSocials() {
    return (
        <div className="hidden lg:block self-end sticky bottom-0 pr-6 lg:pr-10 xl:pr-12 z-20">
            <div className="grid grid-rows-[auto_auto_1fr] gap-6">
                <SocialIcon IconComponent={FaUnsplash} url={socialLinks.unsplash} type={'link'} />
                <SocialIcon IconComponent={FiGithub} url={socialLinks.github} type={'link'} />
                <div className="h-[8rem] w-8 justify-center flex">
                    <div className="dark:bg-white bg-black w-0.5 h-full rounded-md" />
                </div>
            </div>
        </div>)
}