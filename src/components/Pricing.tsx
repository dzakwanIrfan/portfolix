import { PriceCard } from "./PriceCard";

export const Pricing = () => {
    const plans = [
        {
            plan: "Free Explorer",
            price: "$0",
            description: "Perfect for beginners. Start building your portfolio with basic features.",
            features: [
                "1 customizable template.",
                "Up to 5 project slots.",
                "Basic analytics (page views).",
                "PortfoliX branding.",
                "Access to community support.",
            ],
            cta: "Get Started for Free"
        },
        {
            plan: "Pro Creator",
            price: "$5",
            description: "Perfect for beginners. Start building your portfolio with basic features.",
            features: [
                "10+ premium templates.",
                "Unlimited project slots.",
                "Custom domain (e.g., yourname.com).",
                "Advanced analytics",
                "Remove PortfoliX branding.",
            ],
            cta: "Go Pro",
            middle: true
        },
        {
            plan: "Studio Pro",
            price: "$15",
            description: "For professionals and teams managing multiple portfolios and collaborations.",
            features: [
                "All Pro Creator features.",
                "Team collaboration tools (up to 5).",
                "Client access and feedback tools.",
                "White-label options.",
                "Dedicated account manager.",
            ],
            cta: "Choose Studio Pro"
        }
    ]
    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 py-16 flex flex-col justify-center items-center space-y-8">
            <div className="flex flex-col text-center items-center justify-center md:space-y-4 space-y-3 xl:w-5/12 w-full">
                <p className="md:text-lg text-sm">Pricing Plan</p>
                <h2 className="md:text-5xl xs:text-4xl text-[28px]"><span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Affordable</span> Plans for Every Creator</h2>
            </div>
            <div className="flex xl:flex-row flex-col lg:gap-8 gap-4 justify-between items-center w-full">
                {
                    plans.map((plan, index) => (
                        <PriceCard {...plan} key={index} />
                    ))
                }
            </div>
        </section>
    );
}