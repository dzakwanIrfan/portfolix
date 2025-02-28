import { JSX } from "react";

interface WhyCardProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

export const WhyCard = ({ title, description, icon }: WhyCardProps) => {
    return (
        <div className="p-8 my-drop-shadow rounded-2xl bg-white flex flex-col space-y-6">
            <div className="w-12 h-12 text-2xl bg-gradient-to-b from-blue-neon to-purple-neon p-2 text-white rounded-lg">
                {icon}
            </div>
            <div className="flex flex-col items-start space-y-2">
                <h3 className="text-xl font-bold mt-4">{title}</h3>
                <p className="text-sm mt-4">{description}</p>
            </div>
        </div>
    );
}