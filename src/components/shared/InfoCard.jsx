import { cn } from "@/lib/utils";

export function InfoCard({ title, description, className = "" }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-3 rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur",
        className,
      )}
    >
      {title ? (
        <h3 className="text-base font-semibold leading-snug md:text-lg">
          {title}
        </h3>
      ) : null}
      {description ? (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

