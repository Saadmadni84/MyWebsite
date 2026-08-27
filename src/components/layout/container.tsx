import type { ElementType, ReactNode } from "react";

type ContainerWidth = "reading" | "default" | "wide";

type ContainerProps = {
  as?: ElementType;
  width?: ContainerWidth;
  className?: string;
  children: ReactNode;
};

const widthClassNames: Record<ContainerWidth, string> = {
  reading: "container-reading",
  default: "container-default",
  wide: "container-wide",
};

function cx(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Container({
  as: Component = "div",
  width = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cx(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        widthClassNames[width],
        className,
      )}
    >
      {children}
    </Component>
  );
}
