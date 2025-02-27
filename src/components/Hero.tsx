export const Hero = () => {
    return (
      <section className="bg-white text-myBlack relative overflow-hidden">
        <div className="absolute h-[1120px] w-[1120px] bg-[radial-gradient(circle_at_center,#00C2FF_0%,rgba(0,194,255,0)_100%)] rounded-full blur-[100px] left-1/2 md:-top-[75%] sm:-top-[80%] -top-[90%] translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute h-[1120px] w-[1120px] bg-[radial-gradient(circle_at_center,#8A2BE2_0%,rgba(138,43,226,0)_100%)] rounded-full blur-[100px] left-1/2 md:-bottom-[75%] sm:-bottom-[80%] -bottom-[90%] translate-x-[-50%] translate-y-[50%]"></div>
        <div className="lg:mx-40 md:mx-16 sm:mx-8 mx-4 pt-12 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-4 z-10 text-center">
            <h1 className="md:text-5xl xs:text-4xl text-[28px] leading-tight justify-center text-center">
              <div>Build Your Stunning</div>
              <div>
                <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon bg-clip-text text-transparent">Online Portfolio</span>
                &nbsp;in&nbsp;
                <span className="italic">Minutes</span>
              </div>
            </h1>
            <p className="md:text-base text-sm">Showcase your work, attract clients, and grow your career effortlessly</p>
          </div>
          <img src="/laptop.png" alt="Laptop" className="mt-16" />
        </div>
      </section>
    );
};