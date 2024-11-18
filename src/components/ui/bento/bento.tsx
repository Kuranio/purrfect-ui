import type { ReactNode } from "react";
import { cn } from "@/lib/utils";


const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
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
      "row-span-1 rounded-lg group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent",
      className
    )}
  >
    <div className="bg-neutral-100/90 text-neutral-500 rounded-lg p-4 h-full justify-between flex flex-col space-y-4">
      <div>{background}</div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Icon className="h-12 w-12 text-neutral-700 dark:text-neutral-300" />
        <div className="font-sans font-bold text-neutral-200 dark:text-neutral-500 mb-2 mt-2">
          {name}
        </div>
        <div className="font-sans font-normal text-neutral-200 text-xs dark:text-neutral-500">
          {description}
        </div>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {/* CTA button */}
        <a href={href} className="text-primary-500 hover:text-primary-700">
          {cta}
        </a>
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
