import type { Hobby } from "@/types";

interface HobbyCardProps {
  hobby: Hobby;
}

export function HobbyCard(props: HobbyCardProps) {
  const { hobby } = props;
  const Icon = hobby.icon;

  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground/20">
      <div className="relative z-10">
        <Icon className="mb-3 h-8 w-8" />
        <h3 className="mb-2 font-semibold text-foreground text-lg">
          {hobby.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {hobby.description}
        </p>
      </div>
    </article>
  );
}
