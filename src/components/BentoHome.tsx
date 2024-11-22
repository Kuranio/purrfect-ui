import { BentoGrid, BentoCard } from "./ui/Bento";

const features = [
  {
    Icon: () => <span>🏙️</span>,
    name: "Future-Ready Infrastructure",
    description: "Smart solutions for cities.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-2 lg:col-span-2 2xl:col-span-1 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-2.avif" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🤖</span>,
    name: "Revolutionize Your Workflow",
    description: "Optimize daily tasks efficiently.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-1 lg:col-span-2 2xl:col-span-3 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-3.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>📡</span>,
    name: "Analyze the Unseen",
    description: "Discover patterns in data.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-1 lg:col-span-1 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-4.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🌐</span>,
    name: "Work Beyond Borders",
    description: "Work productively from anywhere.",
    className: "col-span-3 sm:col-span-2 lg:col-span-2 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-5.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>💡</span>,
    name: "Creative Spark",
    description: "Innovate with AI tools.",
    className: "hidden lg:flex col-span-1 lg:col-span-1 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-7.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>📊</span>,
    name: "Predictive Models",
    description: "AI-driven future predictions.",
    className: "hidden lg:flex col-span-2 lg:col-span-2 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-8.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🧠</span>,
    name: "Smart Insights",
    description: "Learn patterns with AI.",
    className: "hidden lg:flex col-span-3 lg:col-span-1 2xl:col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-9.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🔍</span>,
    name: "Deep Search",
    description: "AI-precise search results.",
    className: "hidden lg:flex col-span-3 lg:col-span-1 2xl:col-span-1 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-10.webp" 
        alt="Neon image preview" 
      />
    ),
  },
  {
    Icon: () => <span>🌍</span>,
    name: "AI for All",
    description: "AI everywhere for everyone.",
    className: "hidden lg:flex col-span-3 lg:hidden 2xl:flex 2xl:col-span-3 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <img 
        className="w-full h-full pointer-events-none opacity-50 object-cover rounded-lg" 
        src="/images/demo-bento-grid/neon-image-11.webp"
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
