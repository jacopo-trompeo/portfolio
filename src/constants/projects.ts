import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "Kanzen",
    description:
      "All-in-one web dashboard combining a text hooker, an epub reader, an LLM powered chatbot, a dictionary lookup and several other features for Japanese language practice.",
    techStack: ["TanStack Start", "PostgreSQL", "Drizzle"],
    status: ["In progress", "Early stages"],
    link: "https://github.com/jacopo-trompeo/kanzen",
  },
  {
    name: "Palisade",
    description:
      "Linux desktop app that blocks distracting websites and applications during configurable time windows to help maintain focus during hours of productivity.",
    techStack: ["Python", "Qt", "PySide6"],
    status: ["Released", "v0.1.0"],
    link: "https://github.com/jacopo-trompeo/palisade",
  },
  {
    name: "Chameleon",
    description:
      "A web-based social deduction party game where players must identify the impostor hiding among them by comparing their answers to a secret question.",
    techStack: ["Next.js", "WebSockets", "Hono"],
    status: ["Released", "v0.1.0"],
    link: "https://github.com/jacopo-trompeo/chameleon",
  },
];
