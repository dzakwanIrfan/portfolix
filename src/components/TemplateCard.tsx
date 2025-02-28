import { Icon } from "@iconify/react/dist/iconify.js";

interface TemplateCardProps {
    title: string;
    description: string;
    features: string[];
    image: string;
    reverse?: boolean;
}

export const TemplateCard = ({title, description, features, image, reverse}: TemplateCardProps) => {
    return (
        <div className={`flex ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col rounded-[32px] overflow-hidden bg-white my-drop-shadow text-myBlack`}>
            <img src={image} alt="Template 1" className="lg:w-6/12 object-cover" />
            <div className="p-8 flex flex-col justify-between space-y-12">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <div className="text-[32px]">{title}</div>
                        <p>{description}</p>
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-1">
                        <Check text={features[0]} />
                        <Check text={features[1]} />
                        <Check text={features[2]} />
                    </div>
                </div>
                <button className="text-sm bg-gradient-to-r from-purple-neon to-blue-neon text-white py-2 px-4 rounded-full w-24">
                    See more
                </button>
            </div>
        </div>
    );
}

const Check = ({text}: {text: string}) => {
    return (
        <div className="flex gap-2 text-myBlack">
            <Icon icon="mdi:check" width="24" height="24" />
            <span>{text}</span>
        </div>
    );
}