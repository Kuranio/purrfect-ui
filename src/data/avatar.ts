export const importCode = `import { Avatar } from "@purrfect-ui/components";`;

export const basicUsageCode = 
`import React from "react";

interface AvatarProps {
  name?: string;
  src?: string;
  description?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name = "User",
  src = "",
  description = "Description",
  className = "",
}) => {
  return (
    <div
      className={\`relative group \${className} bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full w-12 h-12 md:w-16 md:h-16 transition-all duration-300 hover:z-[10] hover:scale-110\`}
    >
      <div
        id={\`tooltip-\${name}\`}
        role="tooltip"
        className="absolute flex flex-col justify-center items-center bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible dark:bg-gray-700"
      >
        <span className="whitespace-nowrap">{name}</span>
        <span className="whitespace-nowrap">{description}</span>
      </div>
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-full transition-all duration-300 p-[1px] brightness-75 hover:brightness-100"
        src={src}
        alt={\`\${name} avatar\`}
      />
    </div>
  );
};

export default Avatar;`;

export const UsageCode = 
`const avatars = [
  {
    name: "Raúl García",
    src: "https://unavatar.io/github/kuranio",
    description: "Frontend Developer",
  },
  {
    name: "Héctor Olivares",
    src: "https://unavatar.io/github/hectorOliSan",
    description: "Backend Developer",
  },
  {
    name: "Joaquin Pastore",
    src: "https://unavatar.io/github/JoaquinJPB",
    description: "Frontend Developer",
  },
  {
    name: "Alvaro Estévez",
    src: "https://unavatar.io/github/alvaroem17",
    description: "Web Developer",
  },
];

export function AvatarDemo() {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse mb-4">
      {avatars.map((avatar, idx) => (
        <div key={idx}>
          <Avatar
            name={avatar.name}
            src={avatar.src}
            description={avatar.description}
          />
        </div>
      ))}
    </div>
  );
}

export default AvatarDemo;`;
