import type { ElementType, ReactNode } from "react";

type SectionProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

function cx(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Section({
  as: Component = "section",
  className,
  children,
}: SectionProps) {
  return <Component className={cx("section-space", className)}>{children}</Component>;
}
