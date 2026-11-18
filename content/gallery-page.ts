export type GalleryCategory = "Campus" | "Events" | "Sports" | "Classroom";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  caption: string;
  alt: string;
  ratio: "4/3" | "16/9" | "1/1" | "3/4";
  // When the school sends photos: save a WebP (max 1600px wide) in public/images/gallery
  // and set src, for example "/images/gallery/sports-day-1.webp"
  src?: string;
};

export const galleryPage = {
  hero: {
    eyebrow: "Gallery",
    title: "Life at The Nalanda Campus.",
    lead: "A look at our campus, classrooms, events and sports.",
  },
  categories: ["Campus", "Events", "Sports", "Classroom"] as GalleryCategory[],
  // TODO: replace with real photos and captions from the school
  items: [
    {
      id: "g1",
      category: "Campus",
      caption: "Placeholder: school entrance",
      alt: "Placeholder photo of the school entrance",
      ratio: "4/3",
    },
    {
      id: "g2",
      category: "Sports",
      caption: "Placeholder: sports day",
      alt: "Placeholder photo of sports day",
      ratio: "3/4",
    },
    {
      id: "g3",
      category: "Classroom",
      caption: "Placeholder: classroom activity",
      alt: "Placeholder photo of a classroom activity",
      ratio: "1/1",
    },
    {
      id: "g4",
      category: "Events",
      caption: "Placeholder: annual day",
      alt: "Placeholder photo of the annual day",
      ratio: "16/9",
    },
    {
      id: "g5",
      category: "Campus",
      caption: "Placeholder: playground",
      alt: "Placeholder photo of the playground",
      ratio: "3/4",
    },
    {
      id: "g6",
      category: "Sports",
      caption: "Placeholder: relay race",
      alt: "Placeholder photo of a relay race",
      ratio: "4/3",
    },
    {
      id: "g7",
      category: "Classroom",
      caption: "Placeholder: art class",
      alt: "Placeholder photo of an art class",
      ratio: "4/3",
    },
    {
      id: "g8",
      category: "Events",
      caption: "Placeholder: festival celebration",
      alt: "Placeholder photo of a festival celebration",
      ratio: "1/1",
    },
    {
      id: "g9",
      category: "Campus",
      caption: "Placeholder: library",
      alt: "Placeholder photo of the library",
      ratio: "16/9",
    },
    {
      id: "g10",
      category: "Sports",
      caption: "Placeholder: football practice",
      alt: "Placeholder photo of football practice",
      ratio: "1/1",
    },
    {
      id: "g11",
      category: "Classroom",
      caption: "Placeholder: science activity",
      alt: "Placeholder photo of a science activity",
      ratio: "3/4",
    },
    {
      id: "g12",
      category: "Events",
      caption: "Placeholder: prize distribution",
      alt: "Placeholder photo of a prize distribution",
      ratio: "4/3",
    },
  ] as GalleryItem[],
};
