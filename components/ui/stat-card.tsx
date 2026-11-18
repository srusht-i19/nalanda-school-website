export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-heading text-accent text-[44px] leading-none font-bold">
        {value}
      </div>
      <div className="text-on-primary-muted mt-2 text-sm">{label}</div>
    </div>
  );
}
