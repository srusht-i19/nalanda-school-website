import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/sections/mobile-nav";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { school } from "@/content/school";

export function Header() {
  return (
    <header className="border-line bg-surface/95 sticky top-0 z-40 border-b backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-primary hover:text-primary flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="h-12 w-12"
          />
          <span className="font-heading text-lg leading-tight font-bold min-[400px]:text-xl">
            {school.name}
            <span className="font-body text-muted-foreground block text-[11px] font-medium tracking-[0.08em] uppercase">
              {school.city}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-6 text-[15px] font-medium lg:flex"
        >
          {school.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton
            href="/admissions"
            className="hidden h-11 min-[420px]:inline-flex"
          >
            Enquire now
          </LinkButton>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
