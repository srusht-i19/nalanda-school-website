export type Facility = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

// Labs and spaces mentioned in the school's content document.
export const facilities: Facility[] = [
  {
    id: "robotics-centre",
    title: "Robotics Centre",
    description:
      "Hands-on experience in coding, engineering and 3D printing, with immersive projects and team challenges.",
  },
  {
    id: "pottery-carpentry",
    title: "Pottery and Carpentry Labs",
    description:
      "Children learn by making and creating, from shaping clay to assembling simple wooden creations under supervision.",
  },
  {
    id: "soul-room",
    title: "The Soul Room",
    description:
      "A calm and welcoming space for guided meditation and yoga, adapted to each child's age and needs.",
  },
];

export const clubs: Facility[] = [
  {
    id: "heritage",
    title: "Heritage Club",
    description:
      "Children discover India's rich heritage and the customs of other countries, building cultural awareness and a global outlook.",
  },
  {
    id: "food-mood",
    title: "Food Mood Club",
    description:
      "Explores the connection between food, health, happiness and everyday choices, from balanced nutrition to healthy tiffins.",
  },
  {
    id: "dance",
    title: "Dance Club",
    description:
      "Joyful self-expression, rhythm, coordination and confidence through dance and movement.",
  },
  {
    id: "public-speaking",
    title: "Public Speaking Club",
    description:
      "Empowers children to become confident, articulate and thoughtful communicators.",
  },
  {
    id: "finance-life-skills",
    title: "Finance and Life Skills",
    description:
      "The value of money, saving, thoughtful choices, responsibility and practical decision-making.",
  },
];

// TODO: the document does not mention safety facilities. Confirm with the school.
export const safety: string[] = [
  "Safety details to be confirmed by the school",
];
