import { Section } from "@/components/Section";
import { hobbies } from "@/constants/hobbies";
import { HobbyCard } from "./HobbyCard";

interface HobbiesProps {
  number: string;
  title: string;
}

export function Hobbies(props: HobbiesProps) {
  const { number, title } = props;

  return (
    <Section title={title} number={number}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.title} hobby={hobby} />
        ))}
      </div>
    </Section>
  );
}
