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
  {
    id: "e5",
    date: "2026-09-03",
    title: " Krishna Janmashtami",
    description: "Placeholder past event.",
  },
  {
    id: "e6",
    date: "2026-09-05",
    title: "investiture ceremony",
    description: "Placeholder past event.",
  },
  {
    id: "e7",
    date: "2026-09-05",
    title: "ganesh chaturthi clay activity",
    description: "Placeholder past event.",
  },
  {
    id: "e8",
    date: "2026-09-05",
    title: "dental checkup camp",
    description: "Placeholder past event.",
  },
];
