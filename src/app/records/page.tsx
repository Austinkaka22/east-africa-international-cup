import { RecordsView } from "@/components/age-group-views";
import { PageHero } from "@/components/page-hero";
import { ageGroups, records } from "@/data/tournament";

export const metadata = {
  title: "Player Records"
};

export default function RecordsPage() {
  return (
    <>
      <PageHero
        eyebrow="Records"
        title="Player of the tournament records."
        copy="A public archive for award winners by edition, age group, academy, and player profile."
      />
      <section className="section">
        <div className="container">
          <RecordsView records={records} ageGroups={ageGroups} />
        </div>
      </section>
    </>
  );
}
