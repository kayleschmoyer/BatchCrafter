import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: "oklch(0.985 0 0)",               // Biscuit
        foreground: "oklch(0.141 0.005 285.823)",     // Charcoal

        primary: "oklch(0.21 0.006 285.885)",         // Gold
        "primary-foreground": "oklch(0.985 0 0)",

        secondary: "oklch(0.967 0.001 286.375)",      // Graphite
        "secondary-foreground": "oklch(0.21 0.006 285.885)",

        accent: "oklch(0.67 0.06 295)",               // Blue-Violet
        "accent-foreground": "oklch(0.985 0 0)",

        muted: "oklch(0.95 0.001 285)",
        "muted-foreground": "oklch(0.45 0.015 285)",

        destructive: "oklch(0.577 0.245 27.325)",

        border: "oklch(0.92 0.004 286.32)",
        input: "oklch(0.92 0.004 286.32)",
        ring: "oklch(0.705 0.015 286.067)",

        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.141 0.005 285.823)",

        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.141 0.005 285.823)",

        sidebar: "oklch(0.985 0 0)",
        "sidebar-foreground": "oklch(0.141 0.005 285.823)",
        "sidebar-primary": "oklch(0.21 0.006 285.885)",
        "sidebar-primary-foreground": "oklch(0.985 0 0)",
        "sidebar-accent": "oklch(0.274 0.006 286.033)",
        "sidebar-accent-foreground": "oklch(0.985 0 0)",
        "sidebar-border": "oklch(0.9 0 0)",
        "sidebar-ring": "oklch(0.552 0.016 285.938)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};

export default config;
