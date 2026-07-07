import { PageHero } from "@/components/page-hero";
import { TeamRegistrationForm } from "@/components/team-registration-form";
import { ageGroups, brand, countries, teamCountOptions } from "@/data/tournament";

export const metadata = {
  title: "Team Registration"
};

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Team registration"
        title="Register your academy or club."
        copy="Submit one academy registration for the 1st Edition, choose your teams by age group, and the organizing team will follow up by email or phone."
      />
      <section className="section">
        <div className="container">
          <TeamRegistrationForm
            countries={countries}
            ageGroups={ageGroups}
            teamCountOptions={teamCountOptions}
            registrationFee={brand.registrationFee}
            registrationDeadline={brand.registrationDeadline}
          />
        </div>
      </section>
    </>
  );
}
