import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {}

type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLink(props: ButtonProps): props is ButtonAsLink {
  return "href" in props;
}

export function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;

  const baseClasses =
    "inline-flex items-center gap-3 border border-neutral-300 px-6 py-3 text-base text-foreground transition-colors hover:bg-muted sm:text-lg dark:border-border";
  const combinedClasses = cn(baseClasses, className);

  if (isLink(props)) {
    const { href, ...linkProps } = rest as ButtonAsLink;
    const isExternal = href?.startsWith("http");

    return (
      <a
        href={href}
        className={combinedClasses}
        rel={isExternal ? "noopener noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button type="button" className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  );
}
