import { useInView } from "react-intersection-observer";
import { TemplateCard } from "./TemplateCard";

export const Templates = () => {
    const templates = {
        template1: {
            title: "Minimalist",
            description: "Perfect for graphic designers and photographers, this template emphasizes simplicity and elegance.",
            features: [
                "Clean, grid-based layout.",
                "Easy-to-read typography.",
                "Optimized for high-resolution images."
            ],
            image: "/template1.png",
        },
        template2: {
            title: "Bold & Colorful",
            description: "Ideal for illustrators and digital artists, this template is all about making a statement.",
            features: [
                "Vibrant color palettes.",
                "Interactive hover effects.",
                "Gallery-style project displays."
            ],
            image: "/template2.png",
            reverse: true
        },
        template3: {
            title: "Elegant & Professional",
            description: "Designed for architects and product designers, this template exudes professionalism.",
            features: [
                "Structured, grid-based design.",
                "Dedicated sections for project descriptions.",
                "Social media integration."
            ],
            image: "/template3.png",
        }
    }
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const { ref:cardRef1, inView:cardRefVisible1 } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });
    const { ref:cardRef2, inView:cardRefVisible2 } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });
    const { ref:cardRef3, inView:cardRefVisible3 } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 pb-24 flex flex-col justify-start md:space-y-12 space-y-8">
            <div ref={ref} className={`flex flex-col justify-start md:space-y-4 space-y-3 ${inView ? "animate-[fade-in-down_0.5s_ease-out]" : "opacity-0"}`}>
                <h2 className="md:text-5xl xs:text-4xl text-[28px]">Featured <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Templates</span></h2>
                <p className="md:text-lg text-sm">Explore Our Templates</p>
            </div>
            <div className="flex flex-col space-y-8">
                <div ref={cardRef1} className={`${cardRefVisible1 ? "animate-[fade-in-left_0.5s_ease-out]" : "opacity-0"}`}>
                    <TemplateCard {...templates.template1} />
                </div>
                <div ref={cardRef2} className={`${cardRefVisible2 ? "animate-[fade-in-right_0.5s_ease-out]" : "opacity-0"}`}>
                    <TemplateCard {...templates.template2} />
                </div>
                <div ref={cardRef3} className={`${cardRefVisible3 ? "animate-[fade-in-left_0.5s_ease-out]" : "opacity-0"}`}>
                    <TemplateCard {...templates.template3} />
                </div>
            </div>
        </section>
    );
}