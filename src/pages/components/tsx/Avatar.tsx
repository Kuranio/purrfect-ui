import React from "react";
import Avatar from "../../../components/ui/Avatar";

const avatars = [
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
    <div className="flex -space-x-4 rtl:space-x-reverse">
        {avatars.map((avatar, idx) => (
            <div key={idx}>
            <Avatar
                name={avatar.name}
                src={ avatar.src }
                description={avatar.description}
            />
            </div>
        ))}
    </div>
  );
}

export default AvatarDemo;