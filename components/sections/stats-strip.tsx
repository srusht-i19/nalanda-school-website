import { Container } from "@/components/ui/container";
import { StatCard } from "@/components/ui/stat-card";
import { home } from "@/content/home";

export function StatsStrip() {
  return (
    <section className="bg-primary border-t-4 border-orange-500 py-14 text-white min-[900px]:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 min-[900px]:grid-cols-4">
          {home.stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
