import { Icon } from "@iconify/react/dist/iconify.js";

interface PriceCardProps {
    plan: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    middle?: boolean;
}

export const PriceCard = ({plan, price, description, features, cta, middle}: PriceCardProps) => {
    return (
        <div className={`my-drop-shadow p-8 rounded-2xl ${middle ? 'text-white bg-gradient-to-br from-purple-neon to-blue-neon' : 'text-myBlack bg-white'} flex flex-col space-y-4`}>
            <div className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="text-lg">{plan}</div>
                        <div className={`text-xs px-2 py-1 bg-white text-myBlack rounded-full ${middle ? 'block' : 'hidden'}`}>Recommended</div>
                    </div>
                    <div className="flex items-end gap-2">
                        <div className={`${middle ? 'text-white' : 'bg-gradient-to-b from-purple-neon to-blue-neon text-transparent bg-clip-text'} font-bold text-4xl`}>{price}</div>
                        <div>per month</div>
                    </div>
                </div>
                <p className="text-sm text-justify">{description}</p>
            </div>
            <hr />
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col">
                    <div className="font-bold">Features</div>
                    <div className="flex flex-col space-y-2">
                        {features.map((feature, index) => (
                            <FeaturePoint key={index} feature={feature} middle={middle} />
                        ))}
                    </div>
                </div>
                <button className={`text-sm rounded-xl items-center py-3 px-8 ${middle ? 'bg-white text-myBlack' : 'bg-myBlack text-white'}`}>{cta}</button>
            </div>
        </div>
    );
}

interface FeaturePointProps {
    feature: string;
    middle?: boolean;
}

const FeaturePoint = ({feature, middle}: FeaturePointProps) => {
    return (
        <div className={`flex gap-2 items-center ${middle ? 'text-white' : 'text-myBlack'}`}>
            <div className={`rounded-full ${middle ? 'bg-white text-myBlack' : 'bg-myBlack text-white'}`}>
                <Icon icon="mdi:check" width={12} height={12}  />
            </div>
            <div className="text-sm">{feature}</div>
        </div>
    );
}