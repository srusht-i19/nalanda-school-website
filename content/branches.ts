export type Branch = {
  name: string;
  address: string;
  phones: { label: string; tel: string }[];
  text: string;
};

export const branchesIntro = {
  eyebrow: "Our campuses",
  title: "Choose the Nalanda Campus Nearest to You",
  tagline: "Four Branches. One Educational Philosophy.",
  paragraphs: [
    "The Nalanda family comprises four distinct campuses united by a shared vision — an unwavering commitment to academic excellence, a safe and nurturing learning ecosystem, and the holistic development of every child.",
    "Each branch is an embodiment of our broader educational mission: to inspire young minds, foster meaningful and experiential learning, and support comprehensive growth through our balanced Brain–Body–Soul philosophy.",
  ],
  common:
    "Across all our campuses, we remain dedicated to nurturing curiosity, building confidence, instilling positive values, and celebrating the enduring joy of learning.",
};

// TODO: confirm full street addresses for Shanivar Peth and Bondre Nagar
export const branches: Branch[] = [
  {
    name: "FIA – The Nalanda Campus, Nagala Park",
    address: "Zilla Parishad Road, Nagala Park, Kolhapur, Maharashtra – 416003",
    phones: [
      { label: "+91 95799 23959", tel: "+919579923959" },
      { label: "+91 93095 18141", tel: "+919309518141" },
    ],
    text: "Our campus exemplifies our commitment to holistic education, seamlessly integrating academic rigour with sports, creative expression, skill development, and our core Brain–Body–Soul pedagogical approach.",
  },
  {
    name: "Nalanda – The Unique Academy, Kagal",
    address:
      "Ayodhya Park, Opposite Ambedkar Bhavan, Sangam Road, Kagal, Maharashtra – 416216",
    phones: [{ label: "+91 87660 57476", tel: "+918766057476" }],
    text: "The Kagal campus extends the Nalanda educational ethos to families in Kagal and its surrounding regions, with a dedicated focus on nurturing young learners within a supportive, engaging, and stimulating environment.",
  },
  {
    name: "Nalanda – The Unique Preschool, Shanivar Peth",
    address: "Shanivar Peth, Kolhapur, Maharashtra",
    phones: [{ label: "+91 99213 14767", tel: "+919921314767" }],
    text: "A dedicated early childhood centre, the Shanivar Peth branch caters to families seeking a nurturing and structured introduction to formal learning, laying a strong foundation for lifelong growth.",
  },
  {
    name: "Nalanda – The Unique Preschool, Bondre Nagar",
    address: "Bondre Nagar, Kolhapur, Maharashtra",
    phones: [{ label: "+91 75586 45860", tel: "+917558645860" }],
    text: "Extending our preschool network to the Bondre Nagar locality, this campus advances our mission of making high-quality early learning and developmental opportunities accessible to young learners.",
  },
];
