import { PageHero } from "@/components/page-hero";
import { registeredTeams } from "@/data/tournament";

export const metadata = {
  title: "Registered Teams"
};

export default function RegisteredTeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Registered teams"
        title="Approved teams and review status."
        copy="This public directory starts as static data and can later connect directly to the portal approval workflow."
      />
      <section className="section">
        <div className="container table-wrap">
          <table>
            <thead>
              <tr>
                <th>Academy</th>
                <th>Country</th>
                <th>Discipline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {registeredTeams.map((team) => (
                <tr key={team.name}>
                  <td>{team.name}</td>
                  <td>{team.country}</td>
                  <td>{team.discipline}</td>
                  <td>{team.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
