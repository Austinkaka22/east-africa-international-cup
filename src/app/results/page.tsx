import { PageHero } from "@/components/page-hero";
import { results } from "@/data/tournament";

export const metadata = {
  title: "Results"
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Confirmed results after match day."
        copy="Scores, walkovers, and official result confirmations will appear here."
      />
      <section className="section">
        <div className="container table-wrap">
          <table>
            <thead>
              <tr>
                <th>Match</th>
                <th>Discipline</th>
                <th>Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.match}>
                  <td>{result.match}</td>
                  <td>{result.discipline}</td>
                  <td>{result.score}</td>
                  <td>{result.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
