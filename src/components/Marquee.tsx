import React from "react";
import Marquee from "./ui/Marquee";

const MarqueeDemo: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de Marquesina</h1>
      <Marquee speed={30} direction="left" pauseOnHover>
        <p className="inline-block text-lg">🎉 Bienvenidos a Purrfect UI 🎉</p>
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;
