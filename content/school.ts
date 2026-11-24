export const school = {
  name: "The Nalanda Campus",
  city: "Kolhapur",
  fullName: "FIA – The Nalanda Campus",
  heroLine: "Little Learners, Big Dreams, Global Citizens!",
  tagline: "Where Learning Blossoms and Every Child Shines",
  motto: "Nurturing the Brain. Strengthening the Body. Inspiring the Soul.",
  session: "2027–28",

  phone: "+91 95799 23959",
  email: "fortianagalapark@gmail.com",
  email2: "nalandainfo2022@gmail.com", // TODO: confirm which email is the main one
  address: {
    line1: "Zilla Parishad Rd, Nagalapark, Kolhapur, Maharashtra 416003",
    city: "Kolhapur",
    state: "Maharashtra",
    pin: "416003",
  },
  hours: [
    { days: "Mon–Fri", time: "8:00–16:00" },
    { days: "Sat", time: "9:00–13:00" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/share/1CRyeM8WNk/" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/thenalandaschool?utm_source=ig_web_button_share_sheet&evlk=ZDNlZDc0MzIxNw==",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@thenalandaschool?si=GqKt3mv6MDG5LnhA",
    },
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
