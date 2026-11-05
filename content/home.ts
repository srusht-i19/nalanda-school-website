export type IconName = "users" | "book" | "bot" | "trophy";

type WhyCard = { icon: IconName; title: string; text: string };

const whyCards: WhyCard[] = [
  {
    icon: "users",
    title: "Student-centred teaching",
    text: "Children learn through exploration, discussion, projects and hands-on activities, guided by teachers who act as mentors.",
  },
  {
    icon: "book",
    title: "Learning for life",
    text: "Six learning domains: Communication, Finance, Logic, Soul, Body and Life Skills.",
  },
  {
    icon: "bot",
    title: "Clubs and skill labs",
    text: "Robotics, pottery and carpentry, heritage, food and mood, dance, public speaking and more.",
  },
  {
    icon: "trophy",
    title: "Sports and fitness",
    text: "Rope Mallakhamb, skating, basketball, netball, football, cricket and other age-appropriate games.",
  },
];

export const home = {
  hero: {
    eyebrow: "Primary and Secondary sections · Kolhapur",
    title: "Little Learners, Big Dreams, Global Citizens!",
    lead: "A joyful and enriching learning environment where children are encouraged to explore, question, create and grow.",
    check: "Nurturing the Brain. Strengthening the Body. Inspiring the Soul.",
    image: "/images/hero.webp",
    imageAlt:
      "Nalanda's owl mascot dressed as a scholar, holding a book and a peacock feather",
  },
  // TODO: replace with years, students, teacher ratio and results once the school sends them
  stats: [
    { value: "2", label: "Sections: Primary and Secondary" },
    { value: "6", label: "Learning domains" },
    { value: "8", label: "Clubs and skill labs" },
    { value: "6+", label: "Sports and fitness activities" },
  ],
  whyUs: {
    eyebrow: "Why Nalanda",
    title: "Four things that set our school apart.",
    cards: whyCards,
  },
  programs: {
    eyebrow: "Programs",
    title: "One journey, two sections.",
    linkLabel: "See the full curriculum →",
  },
  campus: {
    eyebrow: "Campus",
    title: "Spaces where children learn by doing.",
    linkLabel: "Explore all facilities →",
  },
  events: {
    eyebrow: "News and events",
    title: "Coming up this term.",
    linkLabel: "All events →",
    empty: "New events will be announced soon.",
  },
  testimonials: {
    eyebrow: "Parents say",
    title: "Heard at the school gate.",
  },
};
