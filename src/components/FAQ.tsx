import { useState } from "react";
import { DropDown } from "./DropDown";
import { useInView } from "react-intersection-observer";

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faq = [
        {
            question: "Do I need coding skills to use PortfoliX?",
            answer: "Not at all! PortfoliX is designed for everyone, even if you have no coding experience. We provide an easy-to-use drag-and-drop editor, so you can create a professional portfolio in just minutes.",
        },
        {
            question: "Can I switch templates after my portfolio is live?",
            answer: "Absolutely! You can change templates anytime without losing your data or uploaded content. Simply select a new template, and PortfoliX will automatically adjust your content to the new layout.",
        },
        {
            question: "Is there a limit to the number of images I can upload?",
            answer: "For free accounts, you can upload up to 50 images. If you need more space, we offer premium plans with unlimited uploads. All images are optimized to look their best in your portfolio.",
        },
        {
            question: "How do I delete my account?",
            answer: "You can delete your account anytime through your account settings. Make sure to export or save any important data before deleting, as all data will be permanently removed. If you need help, our support team is here to assist!",
        },
        {
            question: "Does PortfoliX offer custom domains?",
            answer: "Yes! Our premium plans include the option to use a custom domain (e.g., yourname.com). This makes your portfolio look more professional and easier to remember.",
        },
    ];

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    const { ref:cardRef1, inView:cardRefVisible1 } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const { ref:cardRef2, inView:cardRefVisible2 } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const { ref:cardRef3, inView:cardRefVisible3 } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const { ref:cardRef4, inView:cardRefVisible4 } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const { ref:cardRef5, inView:cardRefVisible5 } = useInView({
        threshold: 0.9,
        triggerOnce: true,
    });
    const { ref:buttonRef, inView:buttonRefVisible } = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    return (
        <section className="bg-white text-myBlack lg:mx-40 md:mx-16 sm:mx-8 mx-4 pb-16 flex flex-col justify-center items-center md:space-y-12 space-y-8">
            <div className={`flex flex-col text-center items-center justify-center md:space-y-4 space-y-3 xl:w-5/12 w-full ${inView ? "animate-[fade-in-down_0.5s_ease-out]" : "opacity-0"}`} ref={ref}>
                <h2 className="md:text-5xl xs:text-4xl text-[28px]">Got <span className="font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-transparent bg-clip-text">Questions?</span> We’ve got answers!</h2>
                <p className="md:text-lg text-sm">Frequently Asked Question</p>
            </div>
            <div className="flex flex-col space-y-4 justify-center items-center w-full">
                {faq.map((item, index) => (
                    <div 
                        className={`xl:w-8/12 lg:w-10/12 w-full ${index === 0 ? cardRefVisible1 ? "animate-[fade-in-up_0.5s_ease-out]" : "opacity-0" : index === 1 ? cardRefVisible2 ? "animate-[fade-in-up_0.5s_ease-out]" : "opacity-0" : index === 2 ? cardRefVisible3 ? "animate-[fade-in-up_0.5s_ease-out]" : "opacity-0" : index === 3 ? cardRefVisible4 ? "animate-[fade-in-up_0.5s_ease-out]" : "opacity-0" : cardRefVisible5 ? "animate-[fade-in-up_0.5s_ease-out]" : "opacity-0"}`}
                        ref={index === 0 ? cardRef1 : index === 1 ? cardRef2 : index === 2 ? cardRef3 : index === 3 ? cardRef4 : cardRef5}
                        key={index}
                    >
                        <DropDown
                            question={item.question}
                            answer={item.answer}
                            active={activeIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    </div>
                ))}
            </div>
            <button 
                className={`${buttonRefVisible ? "animate-[fade-in-up_0.5s_ease-out]" : "opacity-0"} text-sm font-bold bg-gradient-to-r from-purple-neon to-blue-neon text-white px-8 py-3 rounded-lg hover:shadow-lg transition duration-300 ease-in-out`}
                ref={buttonRef}
            >
                View full guide
            </button>
        </section>
    );
};