import React from 'react';
import { BentoGrid, BentoCard } from "./ui/Bento";

const features = [
  {
    Icon: () => <span>🏙️</span>,
    name: "Future-Ready Infrastructure",
    description: "Cutting-edge solutions for smart cities.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-2 lg:col-span-2 2xl:col-span-1 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../../public/images/demo-bento-grid/neon-image-2.avif" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🤖</span>,
    name: "Revolutionize Your Workflow",
    description: "Integrate artificial intelligence to optimize and automate your daily tasks.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-1 lg:col-span-2 2xl:col-span-3 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../public/images/demo-bento-grid/neon-image-3.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>📡</span>,
    name: "Analyze the Unseen",
    description: "Unlock the hidden patterns in your data with next-gen analytics tools.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-1 lg:col-span-1 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../public/images/demo-bento-grid/neon-image-4.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🌐</span>,
    name: "Work Beyond Borders",
    description: "Tools for productivity anywhere.",
    className: "col-span-3 sm:col-span-2 lg:col-span-2 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../public/images/demo-bento-grid/neon-image-5.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>💡</span>,
    name: "Creative Spark",
    description: "Generate innovative ideas with AI creativity tools.",
    className: "hidden lg:block col-span-1 lg:col-span-1 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../public/images/demo-bento-grid/neon-image-7.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>📊</span>,
    name: "Predictive Models",
    description: "Forecast the future with AI-driven predictions",
    className: "hidden lg:block col-span-2 lg:col-span-2 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../public/images/demo-bento-grid/neon-image-8.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🧠</span>,
    name: "Smart Insights",
    description: "Unlock hidden patterns with machine learning.",
    className: "hidden lg:block col-span-3 lg:col-span-1 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../public/images/demo-bento-grid/neon-image-9.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🔍</span>,
    name: "Deep Search",
    description: "AI-powered precise search.",
    className: "hidden lg:block col-span-3 lg:col-span-1 2xl:col-span-1 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../public/images/demo-bento-grid/neon-image-10.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🌍</span>,
    name: "AI for All",
    description: "Bringing artificial intelligence to every corner of the world.",
    className: "hidden lg:block col-span-3 lg:hidden 2xl:block 2xl:col-span-3 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="../public/images/demo-bento-grid/neon-image-11.webp"
        alt="Neon image preview" 
      />
    ),
  },
];

export default function BentoHome() {
  return (
    <BentoGrid className="auto-rows-[12rem] sm:auto-rows-[20rem] md:auto-rows-[20rem] 2xl:auto-rows-[18rem] grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
