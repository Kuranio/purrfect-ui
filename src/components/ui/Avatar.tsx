import React from "react";

interface AvatarProps {
  name?: string;
  src?: string;
  description?: string;
  className?: string;
}

const avatar: React.FC<AvatarProps> = ({
  name = "User",
  src = "",
  description = "Description",
  className = "",
}) => {
  return (
    <div
      className={`relative group ${className} bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full w-12 h-12 md:w-16 md:h-16 transition-all duration-300 hover:z-[10] hover:scale-110`}
    >
      <div
        id={`tooltip-${name}`}
        role="tooltip"
        className="absolute flex flex-col justify-center items-center bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible dark:bg-gray-700"
      >
        <span className="whitespace-nowrap">{name}</span>
        <span className="whitespace-nowrap">{description}</span>
      </div>
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-full transition-all duration-300 p-[1px] brightness-75 hover:brightness-100"
        src={ src }
        alt={`${name} avatar`}
      />
    </div>
  );
};

export default avatar;