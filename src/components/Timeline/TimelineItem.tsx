import { motion } from "framer-motion";
import { BriefcaseIcon } from "@/components/icons/BriefcaseIcon";
import { GraduationCapIcon } from "@/components/icons/GraduationCapIcon";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ANIMATION } from "@/lib/animation-config";
import { fadeRight } from "@/lib/animations";
import type { TimelineItem as TimelineItemType } from "@/types";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const icons = {
  work: BriefcaseIcon,
  education: GraduationCapIcon,
} as const;

export function TimelineItem(props: TimelineItemProps) {
  const { item, index } = props;
  const Icon = icons[item.type];
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      custom={Math.min(index * ANIMATION.delay.base, ANIMATION.delay.max)}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: ANIMATION.viewport.margin }}
      variants={fadeRight}
      className="group relative flex gap-3 px-2 py-3 transition-colors hover:bg-neutral-100 sm:gap-4 sm:px-4 sm:py-4 dark:hover:bg-muted/50"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-neutral-200 sm:h-8 sm:w-8 dark:bg-muted">
          <Icon
            className="h-3 w-3 text-muted-foreground sm:h-4 sm:w-4"
            aria-hidden="true"
          />
        </div>
        <div className="mt-2 w-px grow bg-border" />
      </div>

      <div className="pt-0.5 pb-2 sm:pt-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:gap-x-3 sm:gap-y-1">
          <h3 className="font-semibold text-base text-foreground sm:text-lg">
            {item.title}
          </h3>
          <span className="text-muted-foreground text-xs sm:text-sm">
            {item.period}
          </span>
        </div>

        <p className="mt-0.5 text-muted-foreground text-sm sm:text-base">
          {item.organization} · {item.location}
        </p>

        {item.description && (
          <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
            {item.description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-muted-foreground text-sm leading-relaxed sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}
