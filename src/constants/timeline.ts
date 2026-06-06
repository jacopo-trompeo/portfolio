import type { TimelineItem } from "@/types";

export const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Fullstack Developer",
    organization: "Synesthesia",
    location: "Turin, Italy",
    period: "Feb 2023 - Present",
    description: [
      "At Synesthesia, I've worked on a diverse range of client projects, from high-visibility portals to backend systems. I built a customer portal and backoffice for a top-tier Italian football club using Next.js and NestJS, a full-stack application that thousands of fans use daily.",
      "I've also developed backend services for major ecommerce platforms, set up event-driven architectures with MQTT, and delivered everything from interactive kiosks to admin dashboards. Across all of these, I've stuck with TDD and tried to keep the codebase something I'd be glad to hand off to another developer.",
    ],
  },
  {
    type: "education",
    title: "Higher Technical Diploma in Software Development",
    organization: "Fondazione ITS-ICT Piemonte",
    location: "Turin",
    period: "Nov 2021 - Jul 2023",
  },
  {
    type: "education",
    title: "Computer Science",
    organization: "University of Turin",
    location: "Turin",
    period: "Sep 2019 - Jul 2021",
  },
  {
    type: "work",
    title: "Software Developer Intern",
    organization: "Gruppo SCAI",
    location: "Turin, Italy",
    period: "Feb 2018 - Feb 2019",
    description: [
      "Internship where I tackled a real world problem: the company had thousands of manually scanned documents that needed to be aligned, cleaned up and parsed. I built an OCR system using Java and OpenCV that automated this process, turning messy scans into structured, searchable data.",
    ],
  },
  {
    type: "education",
    title: "Diploma in Information and Communication Technologies",
    organization: "ITIS Pininfarina",
    location: "Turin",
    period: "Sep 2014 - Jun 2019",
  },
];
