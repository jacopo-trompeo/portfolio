import { Section } from "@/components/Section";
import { certifications } from "@/constants/certifications";
import { Certification } from "./Certification";

interface CertificationsProps {
  number: string;
  title: string;
}

export function Certifications(props: CertificationsProps) {
  const { number, title } = props;

  return (
    <Section title={title} number={number}>
      <ul className="m-0 list-none space-y-8 p-0">
        {certifications.map((cert, index) => (
          <Certification key={cert.name} certification={cert} index={index} />
        ))}
      </ul>
    </Section>
  );
}
