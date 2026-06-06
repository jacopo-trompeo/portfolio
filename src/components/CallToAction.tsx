import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { personalInfo } from "@/constants/personal-info";

interface CallToActionProps {
  title: string;
  number: string;
}

export function CallToAction(props: CallToActionProps) {
  const { title, number } = props;

  return (
    <Section title={title} number={number}>
      <div className="space-y-4">
        <p className="text-base text-muted-foreground leading-relaxed">
          I'm currently looking for fullstack developer roles where I can build
          reliable software and grow as an engineer. If you're hiring or want to
          collaborate, I'd love to hear from you.
        </p>
        <Button
          href={`mailto:${personalInfo.email}`}
          aria-label={`Send me an email at ${personalInfo.email}`}
        >
          Get in touch
        </Button>
      </div>
    </Section>
  );
}
