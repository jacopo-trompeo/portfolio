import { CallToAction } from "@/components/CallToAction";
import { Certifications } from "@/components/Certifications";
import { Hobbies } from "@/components/Hobbies";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import { Timeline } from "@/components/Timeline";
import type { SiteSection } from "@/types";

export const sections: SiteSection[] = [
  { id: "timeline", title: "Experience & Education", component: Timeline },
  { id: "projects", title: "Projects", component: Projects },
  { id: "certifications", title: "Certifications", component: Certifications },
  {
    id: "technologies",
    title: "Technologies",
    component: Technologies,
  },
  { id: "hobbies", title: "Beyond Code", component: Hobbies },
  { id: "cta", title: "Open to opportunities", component: CallToAction },
];
