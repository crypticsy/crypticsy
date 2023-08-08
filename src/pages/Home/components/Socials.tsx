import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { TbBrandUnsplash } from "react-icons/tb";

export function SocialPlatform() {

    function onClickSocialHandler(url: string) {
        window.open(url, "_blank");
    }

    return (
        <div className="col-2 relative">
            <div className="fixed bottom-0">
                <div className="static space-y-8">
                    <FiGithub className="w-5 h-5 cursor-pointer social-icon" onClick={() => onClickSocialHandler('https://github.com/crypticsy/')} />
                    <FiInstagram className="w-5 h-5 cursor-pointer social-icon" onClick={() => onClickSocialHandler('https://www.instagram.com/crypticsy/')} />
                    <FiLinkedin className="w-5 h-5 cursor-pointer social-icon" onClick={() => onClickSocialHandler('https://www.linkedin.com/in/animeshbasnet/')} />
                    <TbBrandUnsplash className="w-5 h-5 cursor-pointer social-icon" onClick={() => onClickSocialHandler('https://unsplash.com/@crypticsy')} />

                    <div className="h-[6rem] w-5 justify-center flex">
                        <div className="bg-white w-0.5 h-full" />
                    </div>
                </div>
            </div>
        </div>)
}

export function UserEmail() {
    return (
        <div className="col-1">

        </div>)
}