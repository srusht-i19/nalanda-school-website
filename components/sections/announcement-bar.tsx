import Link from "next/link";
import { school } from "@/content/school";

export function AnnouncementBar() {
  return (
    <div className="bg-primary px-4 py-2.5 text-center text-sm text-white">
      Admissions open for {school.session} ·{" "}
      <Link
        href="/admissions"
        className="hover:text-accent font-semibold text-white underline underline-offset-2"
      >
        Enquire now →
      </Link>
    </div>
  );
}
