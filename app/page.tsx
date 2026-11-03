export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-5 py-16 min-[900px]:px-8">
      <h1>Hello school</h1>
      <p className="text-muted mt-4">Theme check: Fraunces + Inter.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#" className="btn btn-primary">
          Start admission
        </a>
        <a href="#" className="btn btn-secondary">
          Book a campus visit
        </a>
      </div>

      <div className="rounded-card bg-surface-2 shadow-card mt-10 p-6">
        <h3>Card check</h3>
        <p className="text-muted mt-2">16px radius, soft shadow, muted text.</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <div className="rounded-card bg-primary h-12 w-12" />
        <div className="rounded-card bg-accent h-12 w-12" />
        <div className="rounded-card border-line bg-surface h-12 w-12 border" />
        <div className="rounded-card bg-placeholder h-12 w-12" />
      </div>
    </main>
  );
}
