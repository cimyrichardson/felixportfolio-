import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium leading-5",
  {
    variants: {
      variant: {
        default: "border-accent/25 bg-accent/10 text-accent",
        secondary: "border-border bg-muted text-muted-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ className, variant }))}
      {...props}
    />
  );
}
