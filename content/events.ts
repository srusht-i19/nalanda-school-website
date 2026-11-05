export type SchoolEvent = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  description: string;
};

export const events: SchoolEvent[] = [
  {
    id: "e1",
    date: "2026-11-14",
    title: "Children's Day carnival",
    description: "Placeholder event.",
  },
  {
    id: "e2",
    date: "2026-11-28",
    title: "Science exhibition",
    description: "Placeholder event.",
  },
  {
    id: "e3",
    date: "2026-12-12",
    title: "Admissions open house",
    description: "Placeholder event.",
  },
  {
    id: "e4",
    date: "2026-09-05",
    title: "Teachers' Day",
    description: "Placeholder past event.",
  },
];
