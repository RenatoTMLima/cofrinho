import { cn } from "@/lib/utils/ui";
import { ComponentProps } from "react";

export function AppSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn("border rounded px-6 py-4 flex flex-col", className)}
    />
  );
}
