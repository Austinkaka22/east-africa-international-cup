import { RecordsView } from "@/components/age-group-views";
import { PageHero } from "@/components/page-hero";
import { ageGroups, records } from "@/data/tournament";

export const metadata = {
  title: "Tournament Records"
};

export default function RecordsPage() {
  return (
    <>
      <PageHero
        eyebrow="Records"
        title="Tournament history, preserved by category."
        copy="A public archive for cup winners and individual awards by edition and age category, ready to be updated after each tournament."
      />
      <section className="section">
        <div className="container">
          <RecordsView records={records} ageGroups={ageGroups} />
        </div>
      </section>
    </>
  );
}
