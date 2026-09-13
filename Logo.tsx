import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <Image
        src="/images/logo.png"
        alt="Building Above Average"
        width={28}
        height={28}
        className="rounded-sm"
        priority
      />
      <span
        className={`tracking-widest text-xs sm:text-sm font-semibold uppercase ${
          dark ? "text-cream" : "text-charcoal"
        }`}
      >
        Building Above Average
      </span>
    </Link>
  );
}
