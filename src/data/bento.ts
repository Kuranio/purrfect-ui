export const importCode = `import { BentoGrid, BentoCard } from "@purrfect-ui/components";`

export const basicUsageCode = 
`import type { ReactNode, FC } from "react";
import { cn } from "./utils";

// Componente para el fondo
const BentoBackground: FC<{ background: ReactNode }> = ({ background }) => (
  <div className="absolute left-0 top-0 w-full bg-neutral-100/90 text-neutral-500 rounded-lg h-full col-span-3 flex flex-col justify-end overflow-hidden">
    <div className="max-h-[85%] p-2 absolute left-0 top-0 h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
      {background}
    </div>
  </div>
);

// Componente para los detalles (icono, título, descripción)
const BentoDetails: FC<{
  name: string;
  description: string;
  Icon: FC<{ className: string }>;
}> = ({ name, description, Icon }) => (
  <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 group-hover:-translate-y-10">
    <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    <h3 className="text-xl font-semibold text-neutral-700 dark:text-white-300">
      {name}
    </h3>
    <p className="max-w-lg text-neutral-400">{description}</p>
  </div>
);

// Componente para el botón o CTA
const BentoCTA: FC<{ href: string; cta: string }> = ({ href, cta }) => (
  <div
    className={cn(
      "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
    )}
  >
    <a href={href}>{cta}</a>
  </div>
);

// Componente BentoCard principal
const BentoCard: FC<{
  name: string;
  background: ReactNode;
  Icon: FC<{ className: string }>;
  description: string;
  href: string;
  cta: string;
  className?: string;
}> = ({ name, background, Icon, description, href, cta, className = "" }) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <BentoBackground background={background} />
    <BentoDetails name={name} description={description} Icon={Icon} />
    <BentoCTA href={href} cta={cta} />
  </div>
);

// Componente BentoGrid
const BentoGrid: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={cn("grid w-full gap-4", className)}>{children}</div>
);

export { BentoCard, BentoGrid };`

export const UsageCode = 
`const features = [
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
        src="/images/demo-bento-grid/neon-image-2.avif" 
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
        src="/images/demo-bento-grid/neon-image-3.webp" 
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
        src="/images/demo-bento-grid/neon-image-4.webp" 
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
        src="/images/demo-bento-grid/neon-image-5.webp" 
        alt="Neon image preview" 
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}`