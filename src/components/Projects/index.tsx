import { ProjectRow } from "@/components/Projects/ProjectRow";
import { Section } from "@/components/Section";
import { projects } from "@/constants/projects";

interface ProjectsProps {
  number: string;
  title: string;
}

export function Projects(props: ProjectsProps) {
  const { number, title } = props;

  return (
    <Section title={title} number={number}>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectRow key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
