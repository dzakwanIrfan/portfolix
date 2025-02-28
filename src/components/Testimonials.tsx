import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 pb-16 flex flex-col justify-center items-center space-y-16">
            <div className="flex flex-col text-center items-center justify-center md:space-y-4 space-y-3 xl:w-5/12 md:w-3/4 w-full">
                <h2 className="md:text-5xl xs:text-4xl text-[28px]">See What Our Customers Are <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Saying</span></h2>
                <p className="md:text-lg text-sm">Don’t just take our word for it—hear from creators who’ve used PortfoliX to showcase their work, attract clients, and grow their careers.</p>
            </div>
            <div className="grid grid-rows-2">
                <TestimonialCard
                    testimonial="PortfoliX has been a game-changer for me. I was able to create a professional portfolio in minutes and start attracting clients right away."
                    name="Jenny Wilson"
                    job="Graphic Designer"
                    picture="https://images.unsplash.com/photo-1601933346350-4d3b1f8d9e4e"
                />
            </div>
        </section>
    );
}