import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PrimaryCTAButton({ href, children }) {
  const content = <span className="px-4 py-1">{children}</span>;

  if (href) {
    return (
      <Link href={href}>
        <Button size="lg">{content}</Button>
      </Link>
    );
  }

  return (
    <Button size="lg">
      {content}
    </Button>
  );
}

