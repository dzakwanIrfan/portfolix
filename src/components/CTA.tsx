export const CTA = () => {
    return (
        <section className="my-drop-shadow overflow-hidden relative rounded-[32px] bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 py-20 mb-24 flex flex-col justify-center items-center md:space-y-12 space-y-8">
            <img src="/ellipse-purple.svg" alt="" className="absolute object-cover xl:-top-16 lg:top-[15%] md:top-[25%] top-[45%] -left-1/2" />
            <img src="/ellipse-blue.svg" alt="" className="absolute object-cover xl:-top-16 lg:top-[15%] md:top-[25%] top-[45%] -right-1/2" />
            <div className="z-10 flex flex-col text-center items-center justify-center md:space-y-4 space-y-3 w-full">
                <h2 className="md:text-5xl xs:text-4xl text-[28px] xl:w-5/12 md:w-3/4 w-full">Start Your <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Portfolio</span> Website Now!</h2>
                <p className="md:text-lg text-sm">Turn your creativity into opportunities. | Build a stunning portfolio in minutes. | showcase your work to the world.</p>
            </div>
            <button 
                className="z-10 text-sm font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-white px-8 py-3 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
            >
                Create Your Portfolio Now!
            </button>
        </section>
    );
}