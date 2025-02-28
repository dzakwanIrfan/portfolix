import { Icon } from "@iconify/react/dist/iconify.js";

export const TemplateCard = () => {
    return (
        <div className="flex lg:flex-row flex-col rounded-[32px] overflow-hidden bg-white my-drop-shadow text-myBlack">
            <img src="/template1.png" alt="Template 1" className="lg:w-6/12 object-cover" />
            <div className="p-8 flex flex-col justify-between space-y-12">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <div className="text-[32px]">Minimalist</div>
                        <p>Perfect for graphic designers and photographers, this template emphasizes simplicity and elegance.</p>
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-1">
                        <Check text="Clean, grid-based layout." />
                        <Check text="Easy-to-read typography." />
                        <Check text="Optimized for high-resolution images." />
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