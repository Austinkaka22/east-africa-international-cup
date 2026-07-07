import { ResultsView } from "@/components/age-group-views";
import { PageHero } from "@/components/page-hero";
import { ageGroups, results } from "@/data/tournament";

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
        <div className="container">
          <ResultsView results={results} ageGroups={ageGroups} />
        </div>
      </section>
    </>
  );
}
