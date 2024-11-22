import type { ReactNode, FC } from "react";
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

export { BentoCard, BentoGrid };