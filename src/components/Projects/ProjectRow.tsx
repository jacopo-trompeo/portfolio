import { motion } from "framer-motion";
import { Chip } from "@/components/Chip";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ANIMATION } from "@/lib/animation-config";
import { fadeUp } from "@/lib/animations";
import type { Project } from "@/types";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export function ProjectRow(props: ProjectRowProps) {
  const { project, index } = props;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      custom={Math.min(index * ANIMATION.delay.base, ANIMATION.delay.max)}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: ANIMATION.viewport.margin }}
      variants={fadeUp}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3 className="font-semibold text-foreground text-xl">
            {project.name}
          </h3>
          <span className="inline-flex flex-wrap gap-x-1.5 gap-y-1">
            {project.status.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </span>
        </div>

        <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <span className="text-muted-foreground/70 text-sm">
            {project.techStack.join(" · ")}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} project on GitHub`}
            className="inline-flex items-center gap-1.5 text-accent text-sm transition-colors hover:text-accent/80"
          >
            View project
            <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <hr className="mt-8 border-border" />
    </motion.div>
  );
}
