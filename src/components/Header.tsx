import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="flex items-center justify-between bg-white py-4 px-4 sm:px-8 md:px-16 lg:px-40 lg:text-lg text-base shadow-sm">
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

      <div className="hidden md:flex gap-4 items-center">
        <button className="text-myBlack hover:text-blue-neon transition-colors hover:underline">
          Sign In
        </button>
        <button className="relative rounded-full bg-gradient-to-r from-blue-neon to-purple-neon p-[2px] shadow-md">
          <div className="bg-white rounded-full px-8 py-2 text-myBlack hover:bg-gray-50 transition-colors">
            Sign Up
          </div>
        </button>
      </div>

      <button
        className="md:hidden text-myBlack focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden px-4 py-6 z-50">
          <ul className="flex flex-col gap-6 text-center">
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
            <li>
              <button className="text-myBlack hover:text-blue-neon transition-colors w-full">
                Sign In
              </button>
            </li>
            <li>
              <button className="relative rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] w-full mx-auto max-w-xs">
                <div className="bg-white rounded-full px-6 py-2 text-myBlack hover:bg-gray-50 transition-colors">
                  Sign Up
                </div>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};