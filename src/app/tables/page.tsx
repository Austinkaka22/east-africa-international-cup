import { PageHero } from "@/components/page-hero";
import { standings } from "@/data/tournament";

export const metadata = {
  title: "Tables"
};

export default function TablesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tables"
        title="Group standings and qualification tables."
        copy="The MVP starts with static standings; the portal phase can calculate and publish tables automatically."
      />
      <section className="section">
        <div className="container table-wrap">
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Discipline</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((row) => (
                <tr key={row.team}>
                  <td>{row.team}</td>
                  <td>{row.discipline}</td>
                  <td>{row.played}</td>
                  <td>{row.wins}</td>
                  <td>{row.draws}</td>
                  <td>{row.losses}</td>
                  <td>{row.gd}</td>
                  <td>{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
