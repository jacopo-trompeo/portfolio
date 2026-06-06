import type { Technology as TechnologyType } from "@/types";

interface TechnologyProps {
  technology: TechnologyType;
}

export function Technology(props: TechnologyProps) {
  const { technology } = props;

  return (
    <div className="flex gap-3 sm:gap-4">
      <span className="w-24 shrink-0 text-muted-foreground text-sm sm:w-28 sm:text-base">
        {technology.category}
      </span>
      <span className="text-foreground text-sm sm:text-base">
        {technology.items.join(", ")}
      </span>
    </div>
  );
}
