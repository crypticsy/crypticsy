export function About() {

    function onClickMailtoHandler(){
        window.location.href = 'mailto:animesh19basnet@domain.com'
    }

    return (
        <div className="justify-center flex items-center min-h-screen">
        <div className='w-[80%] md:w-[60%]' id="about">
            <p className="sfmono-reg pb-6">Hi, my name is</p>

            <h1 className="text-[2.4rem] md:text-[4.2rem]">Animesh Singh Basnet</h1>
            <h2 className="text-gray-500 text-[1.8rem] md:text-[3.6rem] pb-4">I help convert data into insights.</h2>

            <p className="calibre-reg text-xl text-gray-500 pb-10 justify-evenly">
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
                className='text-md px-4 py-3 border-2 border-white'
                onClick={() => onClickMailtoHandler()}
            >
                Contact me !
            </button>
        </div>
        </div>
    )
}