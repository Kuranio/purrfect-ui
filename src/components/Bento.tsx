import React from 'react';
import { BentoGrid, BentoCard } from "./ui/Bento"

const features = [
  {
    Icon: () => <span>🏙️</span>,
    name: "Future-Ready Infrastructure",
    description: "Cutting-edge solutions for smart cities.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/public/images/demo-bento-grid/neon-image-2.avif" 
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
    className: "col-span-3 md:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/public/images/demo-bento-grid/neon-image-3.webp" 
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
    className: "col-span-3 md:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/public/images/demo-bento-grid/neon-image-4.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🌐</span>,
    name: "Work Beyond Borders",
    description: "Tools for productivity anywhere.",
    className: "col-span-3 md:col-span-1 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/public/images/demo-bento-grid/neon-image-5.webp" 
        alt="Neon image preview" 
      />
    ),
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid className="auto-rows-[12rem] sm:auto-rows-[18rem] grid-cols-3">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
