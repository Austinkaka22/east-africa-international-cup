import { TablesView } from "@/components/age-group-views";
import { PageHero } from "@/components/page-hero";
import { ageGroups, standings } from "@/data/tournament";

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
        <div className="container">
          <TablesView standings={standings} ageGroups={ageGroups} />
        </div>
      </section>
    </>
  );
}
