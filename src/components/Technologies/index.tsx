import { Section } from "@/components/Section";
import { technologies } from "@/constants/technologies";
import { Technology } from "./Technology";

interface TechnologiesProps {
  number: string;
  title: string;
}

export function Technologies(props: TechnologiesProps) {
  const { number, title } = props;

  return (
    <Section title={title} number={number}>
      <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-6">
        {technologies.map((tech) => (
          <Technology key={tech.category} technology={tech} />
        ))}
      </div>
    </Section>
  );
}
