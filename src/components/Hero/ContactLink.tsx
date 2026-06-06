interface ContactLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  label: string;
}

export function ContactLink(props: ContactLinkProps) {
  const { icon, label, href, ...rest } = props;

  const content = (
    <span className="inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground">
      {icon}
      {label}
    </span>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return <span>{content}</span>;
}
