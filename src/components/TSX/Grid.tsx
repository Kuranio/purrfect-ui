import { cn } from "@/lib/utils";
import { BentoGrid, BentoCard } from "@/components/ui/bento/bento";

const features = [
  {
    Icon: () => <span>🚀</span>,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
        <div><h1>Hola</h1></div>
    ),
  },
  {
    Icon: () => <span>🚀</span>,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
        <div><h1>Hola</h1></div>
    ),
  },
  {
    Icon: () => <span>🚀</span>,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    background: (
        <div><h1>Hola</h1></div>
    ),
  },
  {
    Icon: () => <span>🚀</span>,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-1 bg-gradient-to-r from-primary/50 to-secondary/50 appearance-none",
    href: "#",
    cta: "Learn more",
    background: (
      <div><h1>Hola</h1></div>
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
}
