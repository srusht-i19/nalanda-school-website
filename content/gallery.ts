export const galleryCategories = [
  "All",
  "Campus",
  "Sports",
  "Events",
  "Classrooms",
] as const;

export type GalleryItem = {
  id: string;
  alt: string;
  category: Exclude<(typeof galleryCategories)[number], "All">;
  src?: string;
};

export const gallery: GalleryItem[] = [
  { id: "g1", alt: "Placeholder campus photo", category: "Campus" },
  { id: "g2", alt: "Placeholder sports day photo", category: "Sports" },
  { id: "g3", alt: "Placeholder event photo", category: "Events" },
  { id: "g4", alt: "Placeholder classroom photo", category: "Classrooms" },
];
