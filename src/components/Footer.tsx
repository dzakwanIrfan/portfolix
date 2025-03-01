import { Icon } from "@iconify/react/dist/iconify.js";

export const Footer = () => { 

  return (
    <>
        <footer className="flex items-center justify-between bg-white py-4 mx-4 sm:mx-8 md:mx-16 lg:mx-40 lg:text-lg text-base border-b border-myBlack">
        <a href="https://dzakwan-irfan.web.app/" className="flex items-center gap-3">
            <img src="/PortfoliX.svg" alt="Logo PortfoliX" className="size-9" />
            <p className="text-3xl md:text-4xl text-myBlack">PortfoliX</p>
        </a>

        <nav className="hidden md:flex">
            <ul className="flex items-center xl:gap-8 gap-4">
            <li>
                <a href="#home" className="text-myBlack hover:text-blue-neon transition-colors">
                Home
                </a>
            </li>
            <li>
                <a href="#templates" className="text-myBlack hover:text-blue-neon transition-colors">
                Templates
                </a>
            </li>
            <li>
                <a href="#pricing" className="text-myBlack hover:text-blue-neon transition-colors">
                Pricing
                </a>
            </li>
            <li>
                <a href="#faq" className="text-myBlack hover:text-blue-neon transition-colors">
                FAQ
                </a>
            </li>
            </ul>
        </nav>

        <div className="flex gap-4 items-center text-myBlack md:text-3xl text-2xl">
            <Icon icon="mdi:email-outline" />
            <Icon icon="mdi:instagram" />
            <Icon icon="mdi:twitter" />
        </div>
        </footer>
        <div className="flex justify-between items-center bg-white py-4 mx-4 sm:mx-8 md:mx-16 lg:mx-40 lg:text-lg md:text-sm text-xs">
            <div>© 2025 PortfoliX All rights reserved.</div>
            <div>Site by @dzakwanirfann</div>
        </div>
    </>
  );
};