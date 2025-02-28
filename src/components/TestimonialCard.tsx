import { Icon } from "@iconify/react/dist/iconify.js";

interface TestimonialCardProps {
    testimonial: string;
    name: string;
    job: string;
    picture: string;
}

export const TestimonialCard = ({testimonial, name, job, picture}: TestimonialCardProps) => {
    return (
        <div className="">
            <div className="flex space-x-2">
                <Icon icon="mdi:star" width="24" height="24" className="bg-gradient-to-b from-purple-neon to-blue-neon text-transparent bg-clip-text" />
                <Icon icon="mdi:star" width="24" height="24" className="bg-gradient-to-b from-purple-neon to-blue-neon text-transparent bg-clip-text" />
                <Icon icon="mdi:star" width="24" height="24" className="bg-gradient-to-b from-purple-neon to-blue-neon text-transparent bg-clip-text" />
                <Icon icon="mdi:star" width="24" height="24" className="bg-gradient-to-b from-purple-neon to-blue-neon text-transparent bg-clip-text" />
                <Icon icon="mdi:star" width="24" height="24" className="bg-gradient-to-b from-purple-neon to-blue-neon text-transparent bg-clip-text" />
            </div>
            <p className="text-lg">{testimonial}</p>
            <div className="flex items-center space-x-2">
                <img src={picture} alt={name} className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-sm">{job}</p>
                </div>
            </div>
        </div>
    );
}