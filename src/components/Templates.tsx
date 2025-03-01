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
    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 pb-24 flex flex-col justify-start md:space-y-12 space-y-8">
            <div className="flex flex-col justify-start md:space-y-4 space-y-3">
                <h2 className="md:text-5xl xs:text-4xl text-[28px]">Featured <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Templates</span></h2>
                <p className="md:text-lg text-sm">Explore Our Templates</p>
            </div>
            <div className="flex flex-col space-y-8">
                <TemplateCard {...templates.template1} />
                <TemplateCard {...templates.template2} />
                <TemplateCard {...templates.template3} />
            </div>
        </section>
    );
}