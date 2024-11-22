import React from 'react';
import { FaChevronRight } from 'react-icons/fa'; 

interface Props {
  content: string;
  buttonClass?: string;
  buttonContainerClass?: string;
  href: string;
}

const Button: React.FC<Props> = ({ content, buttonClass = "", buttonContainerClass = "", href }) => {
  return (
    <div className={`relative bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl p-[1px] space-x-2 w-fit ${buttonContainerClass}`}>
        <a href={href}
            className="relative inline-block font-semibold leading-6 text-white no-underline bg-neutral-100/90 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"
        >
            <span
                className="absolute inset-0 overflow-hidden rounded-xl">
                <span
                    className="absolute inset-0 rounded-xl bg-button-background-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                </span>
            </span>
            <div
                className={`z-2 flex items-center rounded-xl bg-gray-950/50 ${buttonClass}`}
            >
                <span>{content}</span>
                <FaChevronRight className="w-4 h-4 ms-2" /> 
            </div>
            <span
                className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </a>
    </div>
  );
};

export default Button;