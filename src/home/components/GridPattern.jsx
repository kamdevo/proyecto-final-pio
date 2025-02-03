import { useId } from "react";
import { cn } from "@/lib/utils";

export function GridPattern({
  width = 40,
  height = 40,
  x = 0,
  y = 0,
  squares = [[0, 0]],
  strokeDasharray = "",
  className,
  ...props
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          {squares.map(([x, y]) => (
            <rect
              key={`${x}-${y}`}
              width={width}
              height={height}
              x={x}
              y={y}
              strokeWidth={1}
              stroke="currentColor"
              strokeDasharray={strokeDasharray}
              fill="none"
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
