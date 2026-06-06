import { motion } from "framer-motion";
import { AwardIcon } from "@/components/icons/AwardIcon";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ANIMATION } from "@/lib/animation-config";
import { fadeRight } from "@/lib/animations";
import type { Certification as CertificationType } from "@/types";

interface CertificationProps {
  certification: CertificationType;
  index: number;
}

export function Certification(props: CertificationProps) {
  const { certification, index } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      custom={Math.min(index * ANIMATION.delay.base, ANIMATION.delay.max)}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: ANIMATION.viewport.margin }}
      variants={fadeRight}
      className="flex items-start gap-3"
    >
      <AwardIcon
        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
        aria-hidden="true"
      />
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-semibold text-base text-foreground">
            {certification.name}
          </span>
          <span className="text-base text-muted-foreground">
            {certification.year}
          </span>
        </div>
        <p className="text-base text-muted-foreground">
          {certification.description}
        </p>
      </div>
    </motion.li>
  );
}
