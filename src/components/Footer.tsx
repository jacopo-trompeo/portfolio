import { GithubIcon } from "@/components/icons/GithubIcon";
import { personalInfo } from "@/constants/personal-info";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <hr className="mb-8 border-neutral-300 dark:border-border" />
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-muted-foreground text-sm">
          © {currentYear} {personalInfo.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-muted-foreground text-xs">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}
