import { Section } from "@/components/Section";
import { TimelineItem } from "@/components/Timeline/TimelineItem";
import { timeline } from "@/constants/timeline";

interface TimelineProps {
  number: string;
  title: string;
}

export function Timeline(props: TimelineProps) {
  const { number, title } = props;

  return (
    <Section title={title} number={number}>
      <ol className="m-0 list-none space-y-4 p-0">
        {timeline.map((entry, index) => (
          <TimelineItem
            key={`${entry.organization}-${entry.period}`}
            item={entry}
            index={index}
          />
        ))}
      </ol>
    </Section>
  );
}
