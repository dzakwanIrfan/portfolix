import { Icon } from "@iconify/react";

interface DropDownProps {
    question: string;
    answer: string;
    active: boolean;
    onToggle: () => void;
}

export const DropDown = ({ question, answer, active, onToggle }: DropDownProps) => {
    return (
        <div className="flex flex-col space-y-4 p-8 bg-white my-drop-shadow rounded-2xl">
            <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
                <h3 className={`md:text-xl text-lg font-bold ${active ? 'bg-gradient-to-r from-purple-neon to-blue-neon bg-clip-text text-transparent' : 'text-myBlack'}`}>{question}</h3>
                <Icon icon="mingcute:down-line" width="32" height="32" className={`text-myBlack transition-transform ${active ? 'rotate-180' : ''}`} />
            </div>
            {active && <p className="text-myBlack">{answer}</p>}
        </div>
    );
};