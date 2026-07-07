import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Handshake,
  Images,
  Mail,
  MapPinned,
  Medal,
  Megaphone,
  ShieldCheck,
  Shirt,
  Trophy,
  UsersRound
} from "lucide-react";

export const brand = {
  name: "East Africa International Cup",
  shortName: "EAIC",
  tagline: "Karibu East Africa",
  email: "info@eastafricacup.co.ke",
  phone: "+254 794 832 260",
  location: "Lenana School, Nairobi, Kenya",
  officialDates: "12th, 13th, 14th & 15th April 2027",
  venue: "Lenana School, Nairobi, Kenya",
  registrationFee: "KES 14,999",
  registrationDeadline: "28th February 2027"
};

export const ageGroups = [
  { key: "U7", label: "U7", squadLimit: 10 },
  { key: "U9", label: "U9", squadLimit: 12 },
  { key: "U11", label: "U11", squadLimit: 14 },
  { key: "U13", label: "U13", squadLimit: 16 },
  { key: "U15", label: "U15", squadLimit: 20 },
  { key: "U17", label: "U17", squadLimit: 20 },
  { key: "GIRLS_U13", label: "Girls U13", squadLimit: 16 },
  { key: "GIRLS_U15", label: "Girls U15", squadLimit: 20 },
  { key: "GIRLS_U17", label: "Girls U17", squadLimit: 20 },
  { key: "SENIORS", label: "Seniors", squadLimit: 20 }
];

export const teamCountOptions = ["None", "1 team", "2 teams", "3 teams", "4 teams"];

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/first-edition", label: "1st Edition" },
  { href: "/contact", label: "Contact" }
];

export const editionLinks = [
  { href: "/first-edition/register", label: "Team Registration", icon: Shirt },
  { href: "/first-edition/guidelines", label: "Guidelines", icon: ShieldCheck },
  { href: "/first-edition/registered-teams", label: "Registered Teams", icon: UsersRound },
  { href: "/first-edition/work", label: "Work With Us", icon: BriefcaseBusiness },
  { href: "/first-edition/vendors", label: "Vendors", icon: Handshake },
  { href: "/first-edition/branding", label: "Branding", icon: Megaphone },
  { href: "/first-edition/posters", label: "Posters", icon: Images },
  { href: "/fixtures", label: "Fixtures", icon: CalendarDays },
  { href: "/results", label: "Results", icon: Trophy },
  { href: "/tables", label: "Tables", icon: BadgeCheck },
  { href: "/records", label: "Records", icon: Medal }
];

export const impactStats = [
  { value: "10", label: "Age groups" },
  { value: "10+", label: "East African flags represented" },
  { value: "2027", label: "First edition" },
  { value: "20", label: "Max squad size" }
];

export const countries = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Burundi",
  "South Sudan",
  "Somalia",
  "Djibouti",
  "Ethiopia",
  "DR Congo",
  "Eritrea"
];

export const registeredTeams = [
  {
    name: "Rangers Academy",
    country: "Kenya",
    ageGroup: "U13",
    status: "Approved"
  },
  {
    name: "Kampala Junior Stars",
    country: "Uganda",
    ageGroup: "U15",
    status: "Pending documents"
  },
  {
    name: "Arusha Future FC",
    country: "Tanzania",
    ageGroup: "U11",
    status: "Approved"
  },
  {
    name: "Kigali Youth Academy",
    country: "Rwanda",
    ageGroup: "U17",
    status: "Review"
  }
];

export const fixtures = [
  {
    id: "eaic-u13-001",
    date: "12 Apr 2027",
    time: "09:00",
    ageGroup: "U13",
    pitch: "Main Pitch",
    home: "Rangers Academy",
    away: "Arusha Future FC",
    status: "Draft"
  },
  {
    id: "eaic-u15-001",
    date: "12 Apr 2027",
    time: "10:30",
    ageGroup: "U15",
    pitch: "Pitch B",
    home: "Kampala Junior Stars",
    away: "Invited Academy",
    status: "Draft"
  }
];

export const results = [
  {
    match: "Opening showcase",
    ageGroup: "U17",
    score: "Awaiting kickoff",
    status: "No result"
  }
];

export const standings = [
  {
    team: "Rangers Academy",
    ageGroup: "U13",
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    gd: 0,
    points: 0
  },
  {
    team: "Arusha Future FC",
    ageGroup: "U13",
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    gd: 0,
    points: 0
  }
];

export const records = [
  {
    ageGroup: "U13",
    title: "U13 Player of the Tournament",
    status: "Winner to be announced after the 1st Edition."
  },
  {
    ageGroup: "U15",
    title: "U15 Player of the Tournament",
    status: "Winner to be announced after the 1st Edition."
  },
  {
    ageGroup: "U17",
    title: "U17 Player of the Tournament",
    status: "Winner to be announced after the 1st Edition."
  }
];

export const sponsorTiers = [
  {
    title: "Title Partner",
    description: "Headline tournament naming, hero placement, pitch-side visibility, and media mentions."
  },
  {
    title: "Gold Partner",
    description: "Premium logo placement, digital campaign features, activation booth, and poster visibility."
  },
  {
    title: "Community Partner",
    description: "Support youth access, girls football, equipment drives, transport, and welfare programs."
  }
];

export const partnerReasons = [
  {
    title: "Regional visibility",
    icon: MapPinned,
    copy: "Reach academies, families, coaches, scouts, schools, and football communities across East Africa."
  },
  {
    title: "Youth development",
    icon: Trophy,
    copy: "Invest in structured competition, talent exposure, mentorship, and memories that last beyond the event."
  },
  {
    title: "Brand engagement",
    icon: Mail,
    copy: "Connect through digital content, event activations, social storytelling, and sponsor-led experiences."
  }
];

export const officialPartners = [
  {
    name: "Football Kenya Federation",
    role: "Federation Partner",
    logo: "/assets/partners/football-kenya-federation.png"
  },
  {
    name: "Mayland Integrated School",
    role: "Education Partner",
    logo: "/assets/partners/mayland-integrated-school.png"
  },
  {
    name: "Rangers Football Academy",
    role: "Academy Partner",
    logo: "/assets/partners/rangers-football-academy.png"
  },
  {
    name: "Rumhas Construction Co Ltd",
    role: "Sponsor Partner",
    logo: "/assets/partners/rumhas-construction.png"
  }
];
