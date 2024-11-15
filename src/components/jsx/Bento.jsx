import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-lg group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent",
        className
      )}
    >
        <div className="bg-neutral-100/90 text-neutral-500 rounded-lg p-4 h-full justify-between flex flex-col space-y-4">
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-200 dark:text-neutral-500 mb-2 mt-2">
                {title}
                </div>
                <div className="font-sans font-normal text-neutral-200 text-xs dark:text-neutral-500">
                {description}
                </div>
            </div>
        </div>
    </div>
  );
};
