import { RegisteredTeamsView } from "@/components/age-group-views";
import { PageHero } from "@/components/page-hero";
import { ageGroups, registeredTeams } from "@/data/tournament";

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
        <div className="container">
          <RegisteredTeamsView teams={registeredTeams} ageGroups={ageGroups} />
        </div>
      </section>
    </>
  );
}
