import Image from "next/image";
import { cn } from "@/lib/utils";

export function TeacherCard({
  name,
  role,
  imageSrc,
  imageAlt,
  className = "",
}) {
  return (
    <article
      className={cn(
        "flex flex-col items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 text-center shadow-sm backdrop-blur",
        className,
      )}
    >
      {imageSrc ? (
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border/60">
          <Image
            src={imageSrc}
            alt={imageAlt || name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-1">
        {name ? (
          <h3 className="text-base font-semibold md:text-lg">{name}</h3>
        ) : null}
        {role ? (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {role}
          </p>
        ) : null}
      </div>
    </article>
  );
}

