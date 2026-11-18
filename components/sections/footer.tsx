import Link from "next/link";
import { Container } from "@/components/ui/container";
import { emailHref, phoneHref, school } from "@/content/school";

const link = "text-on-primary-muted hover:text-white";
const heading =
  "font-body text-sm font-semibold uppercase tracking-wider text-white";

export function Footer() {
  const { address } = school;
  return (
    <footer className="bg-primary text-on-primary-muted text-sm">
      <Container className="grid gap-10 py-16 min-[900px]:grid-cols-4">
        <div>
          <p className="font-heading text-xl font-bold text-white">
            {school.name}
          </p>
          <p className="mt-3">
            {address.line1}, {address.city}, {address.state} {address.pin}
          </p>
        </div>

        <div>
          <h2 className={heading}>Quick links</h2>
          <ul className="mt-3 space-y-2">
            {school.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Contact</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={phoneHref} className={link}>
                {school.phone}
              </a>
            </li>
            <li>
              <a href={emailHref} className={link}>
                {school.email}
              </a>
            </li>
            {school.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Follow us</h2>
          <ul className="mt-3 space-y-2">
            {school.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className={link}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/15 py-5 text-center text-xs">
        © {new Date().getFullYear()} {school.name}. All rights reserved.
      </div>
    </footer>
  );
}
