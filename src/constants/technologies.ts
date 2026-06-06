import type { Technology } from "@/types";

export const technologies: Technology[] = [
  {
    category: "Backend",
    items: ["Node.js/Bun", "NestJS", "Express", "Hono", ".NET"],
  },
  {
    category: "Frontend",
    items: [
      "React/Next.js",
      "TanStack",
      "TypeScript",
      "Tailwind CSS",
      "CSS/SCSS",
    ],
  },
  {
    category: "Databases & ORMs",
    items: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Prisma",
      "Drizzle",
      "Entity Framework",
    ],
  },
  {
    category: "Testing",
    items: ["Jest", "Vitest", "TDD"],
  },
  {
    category: "DevOps",
    items: ["Git", "GitHub", "Azure DevOps", "Docker"],
  },
  {
    category: "Tools",
    items: ["Linux", "Neovim", "Bash scripting"],
  },
];
