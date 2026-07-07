import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import {
  ageGroups,
  editionLinks,
  partnerReasons,
  registeredTeams,
  sponsorTiers
} from "@/data/tournament";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container grid two">
          <div>
            <p className="eyebrow">The tournament</p>
            <h2>Youth football with a regional heartbeat.</h2>
          </div>
          <div>
            <p className="lead">
              East Africa International Cup is built for academies, schools, coaches,
              scouts, families, partners, and young players who deserve a stage that feels
              as ambitious as their dreams.
            </p>
            <div className="btn-row">
              <Link href="/about" className="button secondary">
                About the cup
              </Link>
              <Link href="/partners" className="button">
                Become a partner <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container grid two">
          <div className="card pad">
            <p className="eyebrow">Age groups</p>
            <h2>From U7 to Seniors.</h2>
            <p>
              Each age group has its own squad limit so registration stays structured,
              fair, and ready for the later tournament portal.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Age group</th>
                  <th>Squad limit</th>
                </tr>
              </thead>
              <tbody>
                {ageGroups.map((ageGroup) => (
                  <tr key={ageGroup.key}>
                    <td>{ageGroup.label}</td>
                    <td>{ageGroup.squadLimit} players</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">1st Edition</p>
          <h2>Everything the first tournament needs.</h2>
          <div className="grid three" style={{ marginTop: 26 }}>
            {editionLinks.slice(0, 9).map((item) => {
              const Icon = item.icon;
              return (
                <Link className="card pad" key={item.href} href={item.href}>
                  <Icon size={28} color="var(--green)" />
                  <h3>{item.label}</h3>
                  <p>Open the {item.label.toLowerCase()} section.</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid two">
          <Image
            className="card"
            src="/assets/sunset-safari.png"
            alt="East African sunset with wildlife silhouettes"
            width={1000}
            height={650}
          />
          <div className="card pad">
            <p className="eyebrow">Partners & sponsors</p>
            <h2>Visible impact on and off the pitch.</h2>
            <div className="grid">
              {partnerReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title}>
                    <Icon size={24} color="var(--gold)" />
                    <h3>{reason.title}</h3>
                    <p>{reason.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Early data</p>
          <h2>Registered team preview.</h2>
          <div className="grid three" style={{ marginTop: 26 }}>
            {registeredTeams.slice(0, 3).map((team) => (
              <div className="card pad" key={team.name}>
                <h3>{team.name}</h3>
                <p>
                  {team.country} · {team.ageGroup}
                </p>
                <strong>{team.status}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container grid two">
          <div>
            <p className="eyebrow">Sponsorship</p>
            <h2>Brand packages for the first edition.</h2>
          </div>
          <div className="grid">
            {sponsorTiers.map((tier) => (
              <div className="card pad" key={tier.title}>
                <h3>{tier.title}</h3>
                <p>{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
