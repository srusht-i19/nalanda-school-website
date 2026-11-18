export type Leader = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const faculty: Leader[] = [
  {
    id: "principal",
    name: "Principal name",
    role: "Principal",
    bio: "Placeholder bio.",
  },
  {
    id: "vice-principal",
    name: "Vice principal name",
    role: "Vice Principal",
    bio: "Placeholder bio.",
  },
  {
    id: "academic-head",
    name: "Academic head name",
    role: "Academic Head",
    bio: "Placeholder bio.",
  },
];
