interface ChipProps
  extends Pick<React.HTMLAttributes<HTMLElement>, "children"> {}

export function Chip(props: ChipProps) {
  const { children } = props;

  return (
    <span className="rounded-full border bg-muted/70 px-2 py-0.5 font-medium text-muted-foreground text-xs dark:border-border dark:bg-muted/30">
      {children}
    </span>
  );
}
