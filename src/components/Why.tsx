import { WhyCard } from "./WhyCard";
import { Icon } from "@iconify/react";

export const Why = () => {
    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 pt-16 pb-24 flex flex-col justify-center items-center md:space-y-12 space-y-8">
            <div className="flex flex-col text-center items-center justify-center md:space-y-4 space-y-3">
                <h2 className="md:text-5xl xs:text-4xl text-[28px]">Why <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Choose</span> PortfoliX?</h2>
                <p className="md:text-lg text-sm">Why Creators Love Us</p>
            </div>
            <div className="flex md:flex-row flex-col gap-8 justify-between md:items-start items-center">
                <WhyCard 
                    description="Choose from 50+ modern templates. Easily customize colors, fonts, and layouts to match your unique style—no design skills needed!"
                    icon={<Icon icon="mdi:color" width="32" height="32" />} 
                    title="Customizable Templates"
                />
                <WhyCard 
                    description="Build your portfolio in minutes with our drag-and-drop editor. No coding required—just upload, customize, and share!"
                    icon={<Icon icon="mdi:lightning-bolt" width="32" height="32" />} 
                    title="Easy to Use"
                />
                <WhyCard 
                    description="Share your portfolio worldwide and connect with clients or collaborators from anywhere. Expand your opportunities effortlessly."
                    icon={<Icon icon="mdi:globe" width="32" height="32" />} 
                    title="Global Reach"
                />
            </div>
        </section>
    );
}