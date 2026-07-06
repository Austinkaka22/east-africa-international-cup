import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { fixtures } from "@/data/tournament";

export const metadata = {
  title: "Fixtures"
};

export default function FixturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fixtures"
        title="Match schedules will live here."
        copy="Fixtures are static placeholders for the MVP and can later be managed through the tournament portal."
      />
      <section className="section">
        <div className="container table-wrap">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Discipline</th>
                <th>Match</th>
                <th>Venue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {fixtures.map((fixture) => (
                <tr key={fixture.id}>
                  <td>{fixture.date}</td>
                  <td>{fixture.time}</td>
                  <td>{fixture.discipline}</td>
                  <td>
                    <Link href={`/match-details?id=${fixture.id}`}>
                      {fixture.home} vs {fixture.away}
                    </Link>
                  </td>
                  <td>{fixture.venue}</td>
                  <td>{fixture.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
