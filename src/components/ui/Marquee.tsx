import React from "react";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // Velocidad de la marquesina en segundos
  direction?: "left" | "right"; // Dirección del desplazamiento
  pauseOnHover?: boolean; // Pausa al pasar el ratón
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
}) => {
  const animationDirection = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  const pauseClass = pauseOnHover ? "group-hover:animate-none" : "";

  return (
    <div className="relative overflow-hidden whitespace-nowrap group">
      <div
        className={`inline-block absolute w-full h-full ${animationDirection} ${pauseClass}`}
        style={{
          animationDuration: `${100 / speed}s`, // Calculamos la duración en base al speed.
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;