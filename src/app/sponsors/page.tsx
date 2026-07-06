import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { sponsorTiers } from "@/data/tournament";

export const metadata = {
  title: "Sponsors"
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors"
        title="Put your brand beside the future of football."
        copy="Sponsor packages can support the tournament experience, player welfare, girls football, media visibility, equipment, transport, awards, and community activations."
      />
      <section className="section">
        <div className="container grid three">
          {sponsorTiers.map((tier) => (
            <div className="card pad" key={tier.title}>
              <h3>{tier.title}</h3>
              <p>{tier.description}</p>
              <Link className="button secondary" href="/first-edition/branding">
                Enquire
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
