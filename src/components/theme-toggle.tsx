"use client";

import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button
      aria-label="Basculer entre les thèmes clair et sombre"
      onClick={() => setTheme(nextTheme)}
      size="icon"
      variant="ghost"
    >
      <SunMoon aria-hidden="true" className="size-5" />
    </Button>
  );
}
