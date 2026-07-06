import { PageHero } from "@/components/page-hero";
import { partnerReasons } from "@/data/tournament";

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
          <h2>Official partners will appear here.</h2>
          <div className="grid three" style={{ marginTop: 26 }}>
            {["Football Development Partner", "Community Partner", "Media Partner"].map(
              (partner) => (
                <div className="card pad" key={partner}>
                  <h3>{partner}</h3>
                  <p>Logo and profile pending organizer approval.</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
