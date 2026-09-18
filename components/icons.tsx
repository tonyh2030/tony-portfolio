export function Icon({ name, className }: { name: "search" | "team" | "build" | "launch" | "chart"; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M20 20l-4.3-4.3" />
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="8.5" cy="8" r="3" />
          <circle cx="16" cy="9.5" r="2.4" />
          <path d="M3.5 19c.6-3 2.6-4.5 5-4.5s4.4 1.5 5 4.5" />
          <path d="M14.5 14.8c1.9.2 3.4 1.6 3.9 4.2" />
        </svg>
      );
    case "build":
      return (
        <svg {...common}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
        </svg>
      );
    case "launch":
      return (
        <svg {...common}>
          <path d="M12 3c2.8 1.8 4.5 4.8 4.5 9 0 2-1 4-2.2 5.4L12 19.5l-2.3-2.1C8.5 16 7.5 14 7.5 12c0-4.2 1.7-7.2 4.5-9z" />
          <path d="M9.5 15.5L7 18M14.5 15.5L17 18" />
          <circle cx="12" cy="11" r="1.6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 20V10M12 20V4M20 20v-7" />
          <path d="M4 20h16" />
        </svg>
      );
  }
}
