import { useInView } from "react-intersection-observer";
import { WhyCard } from "./WhyCard";
import { Icon } from "@iconify/react";

export const Why = () => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
        trackVisibility: true,
        delay: 800,
    });
    const { ref:cardRef1, inView:cardRefVisible1 } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });
    const { ref:cardRef2, inView:cardRefVisible2 } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });
    const { ref:cardRef3, inView:cardRefVisible3 } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });
    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 pt-16 pb-24 flex flex-col justify-center items-center md:space-y-12 space-y-8">
            <div ref={ref} className={`flex flex-col text-center items-center justify-center md:space-y-4 space-y-3 ${inView ? "animate-[fade-in-down_0.5s_ease-out]" : "opacity-0"}`}>
                <h2 className="md:text-5xl xs:text-4xl text-[28px]">Why <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Choose</span> PortfoliX?</h2>
                <p className="md:text-lg text-sm">Why Creators Love Us</p>
            </div>
            <div className="flex md:flex-row flex-col gap-8 justify-between md:items-start items-center">
                <div ref={cardRef1} className={`${cardRefVisible1 ? "animate-[fade-in-down_0.5s_ease-out]" : "opacity-0"}`}>
                    <WhyCard
                        description="Choose from 50+ modern templates. Easily customize colors, fonts, and layouts to match your unique style—no design skills needed!"
                        icon={<Icon icon="mdi:color" width="32" height="32" />} 
                        title="Customizable Templates"
                    />
                </div>
                <div ref={cardRef2} className={`${cardRefVisible2 ? "md:animate-[fade-in-down_1.5s_ease-out] animate-[fade-in-down_0.5s_ease-out]" : "opacity-0"}`}>
                    <WhyCard 
                        description="Build your portfolio in minutes with our drag-and-drop editor. No coding required—just upload, customize, and share!"
                        icon={<Icon icon="mdi:lightning-bolt" width="32" height="32" />} 
                        title="Easy to Use"
                    />
                </div>
                <div ref={cardRef3} className={`${cardRefVisible3 ? "md:animate-[fade-in-down_2.5s_ease-out] animate-[fade-in-down_0.5s_ease-out]" : "opacity-0"}`}>
                    <WhyCard 
                        description="Share your portfolio worldwide and connect with clients or collaborators from anywhere. Expand your opportunities effortlessly."
                        icon={<Icon icon="mdi:globe" width="32" height="32" />} 
                        title="Global Reach"
                    />
                </div>
            </div>
        </section>
    );
}