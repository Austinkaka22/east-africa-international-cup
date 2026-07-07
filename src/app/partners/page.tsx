import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { officialPartners, partnerReasons } from "@/data/tournament";

export const metadata = {
  title: "Partners"
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Join a movement for youth football."
        copy="Partner with a tournament platform designed for visibility, community impact, and the long-term growth of East African academy football."
      />
      <section className="section">
        <div className="container grid three">
          {partnerReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div className="card pad" key={reason.title}>
                <Icon size={34} color="var(--green)" />
                <h3>{reason.title}</h3>
                <p>{reason.copy}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section-tight band">
        <div className="container">
          <p className="eyebrow">Partner logos</p>
          <h2>Official tournament partners.</h2>
          <div className="partner-logo-grid">
            {officialPartners.map((partner) => (
              <div className="card pad partner-logo-card" key={partner.name}>
                <div className="partner-logo-mark">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={360}
                    height={220}
                  />
                </div>
                <h3>{partner.name}</h3>
                <p>{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
