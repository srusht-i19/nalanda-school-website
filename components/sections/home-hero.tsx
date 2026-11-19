import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { home } from "@/content/home";

const pillars = [
  { title: "Brain", text: "Robotics, coding and curious classrooms" },
  { title: "Body", text: "Sports, dance and healthy habits" },
  { title: "Soul", text: "Yoga, meditation and strong values" },
];

export function HomeHero() {
  const { hero } = home;
  return (
    <section className="pt-6 pb-12 min-[900px]:pt-8 min-[900px]:pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0b3d26] via-[#0f5233] to-[#157347] p-6 text-white shadow-2xl min-[900px]:p-14">
          {/* decorative circles */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-orange-400/20 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative grid items-center gap-10 min-[900px]:grid-cols-[1.2fr_1fr] min-[900px]:gap-12">
            <div className="flex flex-col gap-6">
              <p className="w-fit rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-semibold tracking-[0.1em] text-orange-200 uppercase">
                {hero.eyebrow}
              </p>
              <h1 className="text-white">{hero.title}</h1>
              <p className="max-w-[520px] text-lg text-white/85">{hero.lead}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/admissions"
                  className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Start admission
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  Book a campus visit
                </Link>
              </div>
            </div>

            {/* full mascot inside a cream circle */}
            <div className="mx-auto w-full max-w-[400px]">
              <div
                data-hero-mascot
                className="relative aspect-square rounded-full bg-[#fdf3dc] p-6 shadow-xl ring-8 ring-white/20"
              >
                <ImageFrame
                  src={hero.image}
                  alt={hero.imageAlt}
                  ratio="1/1"
                  fit="contain"
                  priority
                  className="no-card! bg-transparent"
                />
              </div>
            </div>
          </div>

          <div className="relative mt-10 grid gap-3 min-[700px]:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="text-xl font-semibold text-orange-200">
                  {p.title}
                </p>
                <p className="mt-1 text-sm text-white/85">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
