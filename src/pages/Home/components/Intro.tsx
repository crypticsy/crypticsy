export function Intro() {

    function onClickMailtoHandler() {
        window.location.href = 'mailto:animesh19basnet@domain.com'
    }

    return (
        <div className="justify-center flex items-center min-h-screen">
            <div className='max-w-[90%] space-y-6' id="about">
                <p className="sfmono-reg text-2xl">Hi, my name is</p>

                <h1 className="text-[2.4rem] md:text-[4.4rem]">Animesh Singh Basnet</h1>
                <h2 className="text-gray-500 text-[1.8rem] md:text-[3.3rem]">I help convert data into insights.</h2>

                <p className="calibre-reg text-2xl text-gray-500 pb-6 justify-evenly max-w-2xl">
                    I’m a programmer specializing in building (and occasionally designing).
                    Currently, I’m focused on implementing data driven decisions at &nbsp;
                    <a
                        className='cursor-pointer text-white hover:text-white'
                        href="https://www.bhoos.com/about/"
                        target="_blank"
                    >
                        Bhoos
                    </a>.
                </p>

                <button
                    className='text-xl px-4 py-3 border-2 border-white'
                    onClick={() => onClickMailtoHandler()}
                >
                    Contact me!
                </button>
            </div>
        </div>
    )
}