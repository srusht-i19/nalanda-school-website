export type Program = {
  id: string;
  label: string;
  ages: string;
  title: string;
  intro: string;
  subjects: string[];
  outcome: string;
};

export const programs: Program[] = [
  {
    id: "primary",
    label: "Primary section",
    ages: "Classes to be confirmed",
    title: "Primary: strong foundations for lifelong learning",
    intro:
      "Our primary section lays strong foundations for lifelong learning by combining academic excellence with creativity, values, practical experiences and the all-round development of every child.",
    subjects: [],
    outcome:
      "Children develop confidence, curiosity, independence and a love for learning.",
  },
  {
    id: "secondary",
    label: "Secondary section",
    ages: "Classes to be confirmed",
    title: "Secondary section",
    intro: "Placeholder: secondary section text to be provided by the school.",
    subjects: [],
    outcome: "Placeholder.",
  },
];

export type LearningDomain = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  areas: string[];
};

export const domains: LearningDomain[] = [
  {
    id: "communication",
    title: "Communication",
    tagline: "The Art of Expression",
    summary:
      "Developing linguistic proficiency and the confidence to articulate thoughts, ideas and emotions with clarity and impact.",
    areas: ["English", "Hindi", "Marathi", "Sanskrit", "Public Speaking"],
  },
  {
    id: "finance",
    title: "Finance",
    tagline: "The Science of Numbers and Value",
    summary:
      "Mathematical and foundational financial literacy, essential for real-world competence.",
    areas: ["Mathematics", "Finance Club"],
  },
  {
    id: "logic",
    title: "Logic",
    tagline: "The Power of Reasoning and Innovation",
    summary:
      "Sharpening intellectual capabilities through logical reasoning, scientific inquiry and technology-driven learning.",
    areas: ["Science", "ICT", "Robotics", "Artificial Intelligence"],
  },
  {
    id: "soul",
    title: "Soul",
    tagline: "The Essence of Creativity and Inner Harmony",
    summary:
      "Nurturing creativity, cultural consciousness, emotional equilibrium and inner well-being.",
    areas: [
      "Art and Pottery",
      "Dance Club",
      "Heritage Club",
      "Circle Time",
      "Yoga and Meditation",
    ],
  },
  {
    id: "body",
    title: "Body",
    tagline: "The Foundation of Strength and Vitality",
    summary:
      "Physical development, active participation and the adoption of a healthy lifestyle.",
    areas: [
      "Free Play and Structured Movement",
      "Basketball",
      "Football",
      "Cricket",
      "Rope Mallakhamb",
      "Skating",
      "Self-Defence",
      "Nutrition and Food Awareness",
    ],
  },
  {
    id: "life-skills",
    title: "Life Skills",
    tagline: "The Competencies for Life",
    summary:
      "Equipping students to navigate real-world challenges with resilience, empathy and effectiveness.",
    areas: [
      "Critical Thinking",
      "Problem-Solving",
      "Leadership",
      "Teamwork and Collaboration",
      "Emotional Intelligence",
    ],
  },
];
