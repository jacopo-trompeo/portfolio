import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ANIMATION } from "@/lib/animation-config";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionProps
  extends Pick<React.HTMLAttributes<HTMLElement>, "className" | "children"> {
  title: string;
  number?: string;
}

export function Section(props: SectionProps) {
  const { title, number, children, className } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: ANIMATION.viewport.marginSection }}
      variants={fadeIn}
      className={cn("py-8 md:py-16", className)}
    >
      <h2 className="mb-6 font-bold text-2xl text-foreground sm:text-3xl md:mb-8">
        {number && (
          <span className="mr-2 font-mono text-muted-foreground">
            [{number}]
          </span>
        )}
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
