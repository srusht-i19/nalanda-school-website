import { events, type SchoolEvent } from "@/content/events";

// Next upcoming events, soonest first. Runs when the site is built.
export function upcomingEvents(
  count = 3,
  today = new Date().toISOString().slice(0, 10),
): SchoolEvent[] {
  return events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, count);
}

export function eventParts(date: string) {
  const d = new Date(`${date}T00:00:00`);
  return {
    day: String(d.getDate()),
    month: d.toLocaleString("en-IN", { month: "short" }),
  };
}
