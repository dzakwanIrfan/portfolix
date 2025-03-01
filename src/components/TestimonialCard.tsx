interface TestimonialCardProps {
    testimonial: string;
    name: string;
    job: string;
    picture: string;
}

export const TestimonialCard = ({ testimonial, name, job, picture }: TestimonialCardProps) => {
    return (
        <div className="bg-white p-8 rounded-2xl my-drop-shadow transition-all">
            <div className="flex gap-2 items-center">
                <div className="flex">
                    <img src="/star.png" alt="Star" />
                    <img src="/star.png" alt="Star" />
                    <img src="/star.png" alt="Star" />
                    <img src="/star.png" alt="Star" />
                    <img src="/star.png" alt="Star" />
                </div>
                <span>5.0</span>
            </div>
            <p className="font-bold mt-3">{testimonial}</p>
            <div className="flex items-center space-x-2 mt-8">
                <img src={picture} alt={name} className="w-12 h-12 rounded-full" />
                <div>
                    <p className="text-sm font-bold">{name}</p>
                    <p className="text-xs">{job}</p>
                </div>
            </div>
        </div>
    );
};