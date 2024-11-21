export const importCode = `import { BentoGrid, BentoCard } from "@purrfect-ui/components";`

export const basicUsageCode = 
`const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[14rem] md:auto-rows-[18rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div className="bg-neutral-100/90 text-neutral-500 rounded-lg h-full relative col-span-3 flex flex-col justify-end overflow-hidden ">
      <div className="max-h-[85%] p-2 absolute left-0 top-0 h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 transition-all duration-300 group-hover:-translate-y-10">
        <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-white-300">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>
  
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
          <a href={href}>
            {cta}
          </a>
      </div>
    </div>
  </div>
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
        src="@/images/demo-bento-grid/neon-image-2.avif" 
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
        src="@/images/demo-bento-grid/neon-image-3.webp" 
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
        src="@/images/demo-bento-grid/neon-image-4.webp" 
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
        src="@/images/demo-bento-grid/neon-image-5.webp" 
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