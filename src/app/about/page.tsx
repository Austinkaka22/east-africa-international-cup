import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { aboutPillars } from "@/data/tournament";

export const metadata = {
  title: "About Us"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Bridging communities through football."
        copy="The East Africa International Cup was created to promote youth development, regional connection, and meaningful football opportunities for academy players."
      />
      <section className="section">
        <div className="container grid two">
          <div className="card pad">
            <h2>Our message</h2>
            <p>
              We believe youth tournaments are more than fixtures. They are classrooms,
              community gatherings, talent showcases, and memories that push young players
              to dream beyond their training grounds.
            </p>
            <p>
              The 1st Edition brings structure to registration, clear communication for
              stakeholders, and a public platform that can grow into a full tournament
              management portal.
            </p>
          </div>
          <Image
            className="card"
            src="/assets/africa-map-panel.png"
            alt="Africa map artwork from the tournament profile"
            width={900}
            height={650}
          />
        </div>
      </section>
      <section className="section-tight band">
        <div className="container grid three">
          {aboutPillars.map((pillar) => (
            <div className="card pad" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
