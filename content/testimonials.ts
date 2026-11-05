export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  relation: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Placeholder parent quote about teachers.",
    name: "Parent name",
    relation: "Parent, Class 6",
  },
  {
    id: "t2",
    quote: "Placeholder parent quote about settling in.",
    name: "Parent name",
    relation: "Parent, Class 4",
  },
  {
    id: "t3",
    quote: "Placeholder parent quote about communication.",
    name: "Parent name",
    relation: "Parent, Sr. KG",
  },
];
