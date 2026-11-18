import { Container } from "@/components/ui/container";
import { StatCard } from "@/components/ui/stat-card";
import { home } from "@/content/home";

export function StatsStrip() {
  return (
    <section className="pb-16 min-[900px]:pb-24">
      <Container>
        <div className="rounded-card bg-primary grid grid-cols-2 gap-8 p-8 min-[900px]:grid-cols-4 min-[900px]:p-10">
          {home.stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
