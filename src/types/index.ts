export type TimelineItemType = "work" | "education";

export type TimelineItem = {
  type: TimelineItemType;
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string[];
};

export type Project = {
  name: string;
  description: string;
  techStack: string[];
  status: string[];
  link: string;
};

export type Hobby = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Certification = {
  name: string;
  year: number;
  description: string;
};

export type Technology = {
  category: string;
  items: string[];
};

export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  location: string;
  about: string[];
};

export type SiteSection = {
  id: string;
  title: string;
  component: React.ComponentType<{ title: string; number: string }>;
};
