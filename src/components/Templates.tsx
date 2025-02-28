import { TemplateCard } from "./TemplateCard";

export const Templates = () => {
    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 pb-32 pt-16 flex flex-col justify-start space-y-16">
            <div className="flex flex-col justify-start md:space-y-4 space-y-3">
                <h2 className="md:text-5xl xs:text-4xl text-[28px]">Featured <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Templates</span></h2>
                <p className="md:text-lg text-sm">Explore Our Templates</p>
            </div>
            <div className="flex flex-col space-y-8">
                <TemplateCard />
            </div>
        </section>
    );
}