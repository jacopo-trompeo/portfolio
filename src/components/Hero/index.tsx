import { motion } from "framer-motion";
import { ContactLink } from "@/components/Hero/ContactLink";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { MapPinIcon } from "@/components/icons/MapPinIcon";
import { personalInfo } from "@/constants/personal-info";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ANIMATION } from "@/lib/animation-config";
import { fadeUp } from "@/lib/animations";

const contacts = [
  {
    icon: <MailIcon className="h-4 w-4" />,
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    "aria-label": `Email me at ${personalInfo.email}`,
  },
  {
    icon: <GithubIcon className="h-4 w-4" />,
    label: personalInfo.github,
    href: `https://github.com/${personalInfo.github}`,
    "aria-label": `View my GitHub profile (${personalInfo.github})`,
  },
  {
    icon: <MapPinIcon className="h-4 w-4" />,
    label: personalInfo.location,
    "aria-label": `Located in ${personalInfo.location}`,
  },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="py-8 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col justify-center md:min-h-[50vh] md:w-full">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <h1 className="font-bold text-4xl text-foreground tracking-tight sm:text-5xl md:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="mt-2 text-muted-foreground text-xl sm:text-2xl">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            custom={ANIMATION.delay.stagger}
            className="mt-6 space-y-3 md:mt-8 md:space-y-4"
          >
            {personalInfo.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base text-muted-foreground leading-relaxed sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.nav
            aria-label="Contact information"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            custom={ANIMATION.delay.stagger * 2}
            className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4"
          >
            {contacts.map((contact) => (
              <ContactLink key={contact.label} {...contact} />
            ))}
          </motion.nav>
        </div>
      </div>
    </header>
  );
}
