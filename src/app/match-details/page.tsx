import { PageHero } from "@/components/page-hero";
import { fixtures } from "@/data/tournament";

export const metadata = {
  title: "Match Details"
};

export default function MatchDetailsPage() {
  const fixture = fixtures[0];

  return (
    <>
      <PageHero
        eyebrow="Match details"
        title="Every match gets a story page."
        copy="The MVP includes a placeholder match detail view. The portal can later power scorers, cards, status, officials, and live updates."
      />
      <section className="section">
        <div className="container card pad">
          <h2>
            {fixture.home} vs {fixture.away}
          </h2>
          <p>
            {fixture.discipline} · {fixture.venue} · {fixture.time}
          </p>
          <div className="grid three" style={{ marginTop: 24 }}>
            <div>
              <h3>Score</h3>
              <p>Awaiting kickoff</p>
            </div>
            <div>
              <h3>Match notes</h3>
              <p>Team sheets, scorers, cards, and official notes will appear here.</p>
            </div>
            <div>
              <h3>Status</h3>
              <p>{fixture.status}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
