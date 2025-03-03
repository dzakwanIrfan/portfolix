import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { useInView } from "react-intersection-observer";

export const Testimonials = () => {
    const [active, setActive] = useState(false);
    const testimonials = {
        testimonial1: {
            testimonial: '"PortfoliX helped me land my first client within a week! The templates are so professional, and the customization options made it easy to showcase my work exactly how I wanted."',
            name: "Yulio Putra",
            job: "Graphic Designer",
            picture: "/pict1.png"
        },
        testimonial2: {
            testimonial: '“The templates are not only beautiful but also super easy to set up. I was able to create a stunning portfolio in just an hour. My clients love how clean and professional it looks.”',
            name: "Anisya Rachmawati",
            job: "Photographer",
            picture: "/pict2.png"
        },
        testimonial3: {
            testimonial: '“I’ve tried other portfolio platforms, but PortfoliX is by far the best. The bold and colorful templates perfectly match my artistic style, and the drag-and-drop editor is a lifesaver.”',
            name: "Ida Zumrotul",
            job: "Illustrator",
            picture: "/pict3.png"
        },
        testimonial4: {
            testimonial: '“As an architect, I needed a portfolio that could showcase my projects in a structured and elegant way. PortfoliX delivered exactly that. The professional templates made it easy to highlight my work.”',
            name: "Ira Rahayu",
            job: "Architect",
            picture: "/pict4.png"
        },
        testimonial5: {
            testimonial: '“The modern and techy templates on PortfoliX are perfect for showcasing my coding projects. I love how I can display code snippets and interactive demos. It’s a game-changer for developers like me!”',
            name: "Alyaa Humayra",
            job: "Web Developer",
            picture: "/pict5.png"
        },
        testimonial6: {
            testimonial: '"PortfoliX made it so easy to create a playful and creative portfolio that reflects my personality. The animations and unique layouts really make my work stand out. I’ve gotten so many compliments from clients!"',
            name: "Putri Marta",
            job: "Content Creator",
            picture: "/pict6.png"
        }
    }
    const handleToggle = () => {
        setActive(!active);
    }

    const displayedTestimonials = active ? testimonials : Object.values(testimonials).slice(0, 3);
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const { ref:cardRef, inView:cardRefVisible } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const { ref:buttonRef, inView:buttonRefVisible } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 pb-24 flex flex-col justify-center items-center md:space-y-12 space-y-8">
            <div ref={ref} className={`flex flex-col text-center items-center justify-center md:space-y-4 space-y-3 xl:w-5/12 md:w-3/4 w-full ${inView ? "animate-[fade-in-down_0.5s_ease-out]" : "opacity-0"}`}>
                <h2 className="md:text-5xl xs:text-4xl text-[28px]">See What Our Customers Are <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Saying</span></h2>
                <p className="md:text-lg text-sm">Don’t just take our word for it—hear from creators who’ve used PortfoliX to showcase their work, attract clients, and grow their careers.</p>
            </div>
            <div ref={cardRef} className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-300 ease-in-out ${cardRefVisible ? "animate-[fade-in-up_0.5s_ease-out]" : "opacity-0"}`}>
                {Object.values(displayedTestimonials).map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        testimonial={testimonial.testimonial}
                        name={testimonial.name}
                        job={testimonial.job}
                        picture={testimonial.picture}
                    />
                ))}
            </div>
            <button 
                className={`text-sm font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-white px-8 py-3 rounded-lg hover:shadow-lg transition duration-300 ease-in-out ${buttonRefVisible ? "animate-[fade-in-up_0.5s_ease-out]" : "opacity-0"}`}
                onClick={() => handleToggle()}
                ref={buttonRef}
            >
                {active ? 'See less testimonials' : 'See more testimonials'}
            </button>
        </section>
    );
}