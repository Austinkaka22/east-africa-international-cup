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
  email: "info@eastafricainternationalcup.com",
  phone: "+254 700 000 000",
  location: "East Africa"
};

export const disciplines = [
  { name: "Under 7", key: "U7", players: 10 },
  { name: "Under 9", key: "U9", players: 12 },
  { name: "Under 11", key: "U11", players: 14 },
  { name: "Under 13", key: "U13", players: 16 },
  { name: "Under 15", key: "U15", players: 20 },
  { name: "Under 17", key: "U17", players: 20 }
];

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
  { value: "6", label: "Age disciplines" },
  { value: "10+", label: "East African flags represented" },
  { value: "1st", label: "Edition platform" },
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
    discipline: "Under 13",
    status: "Approved"
  },
  {
    name: "Kampala Junior Stars",
    country: "Uganda",
    discipline: "Under 15",
    status: "Pending documents"
  },
  {
    name: "Arusha Future FC",
    country: "Tanzania",
    discipline: "Under 11",
    status: "Approved"
  },
  {
    name: "Kigali Youth Academy",
    country: "Rwanda",
    discipline: "Under 17",
    status: "Review"
  }
];

export const fixtures = [
  {
    id: "eaic-u13-001",
    date: "To be confirmed",
    time: "09:00",
    discipline: "Under 13",
    venue: "Main Pitch",
    home: "Rangers Academy",
    away: "Arusha Future FC",
    status: "Draft"
  },
  {
    id: "eaic-u15-001",
    date: "To be confirmed",
    time: "10:30",
    discipline: "Under 15",
    venue: "Pitch B",
    home: "Kampala Junior Stars",
    away: "Invited Academy",
    status: "Draft"
  }
];

export const results = [
  {
    match: "Opening showcase",
    discipline: "Under 17",
    score: "Awaiting kickoff",
    status: "No result"
  }
];

export const standings = [
  {
    team: "Rangers Academy",
    discipline: "Under 13",
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    gd: 0,
    points: 0
  },
  {
    team: "Arusha Future FC",
    discipline: "Under 13",
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    gd: 0,
    points: 0
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
