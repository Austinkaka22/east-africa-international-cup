import { FixturesView } from "@/components/age-group-views";
import { PageHero } from "@/components/page-hero";
import { ageGroups, fixtures } from "@/data/tournament";

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
        <div className="container">
          <FixturesView fixtures={fixtures} ageGroups={ageGroups} />
        </div>
      </section>
    </>
  );
}
