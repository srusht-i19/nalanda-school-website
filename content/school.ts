export const school = {
  name: "The Nalanda Campus",
  city: "Kolhapur",
  fullName: "FIA – The Nalanda Campus",
  heroLine: "Little Learners, Big Dreams, Global Citizens!",
  tagline: "Where Learning Blossoms and Every Child Shines",
  motto: "Nurturing the Brain. Strengthening the Body. Inspiring the Soul.",
  session: "2027–28",
  phone: "+91 231 000 0000", // TODO: real number
  email: "admissions@example.com", // TODO: real email
  address: {
    line1: "Address line to be added",
    city: "Kolhapur",
    state: "Maharashtra",
    pin: "416001",
  },
  hours: [
    { days: "Mon–Fri", time: "8:00–16:00" },
    { days: "Sat", time: "9:00–13:00" },
  ],
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  nav: [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Campus", href: "/campus" },
    { label: "Gallery", href: "/gallery" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
};

export const phoneHref = `tel:${school.phone.replace(/[^+\d]/g, "")}`;
export const emailHref = `mailto:${school.email}`;
