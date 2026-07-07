import { PageHero } from "@/components/page-hero";
import { ageGroups } from "@/data/tournament";

export const metadata = {
  title: "Registration Guidelines"
};

export default function GuidelinesPage() {
  const steps = [
    "Choose the correct age groups and confirm squad size.",
    "Submit academy, contact person, and team-count details through the registration form.",
    "Wait for organizer review and follow-up instructions.",
    "Provide age eligibility documents and any requested payment confirmation.",
    "Approved teams appear publicly on the registered teams page."
  ];

  return (
    <>
      <PageHero
        eyebrow="Guidelines"
        title="Clear registration rules for every academy."
        copy="These guidelines keep team intake organized while the full portal is being prepared."
      />
      <section className="section">
        <div className="container grid two">
          <div className="card pad">
            <h2>Process</h2>
            {steps.map((step, index) => (
              <p key={step}>
                <strong>{index + 1}. </strong>
                {step}
              </p>
            ))}
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Age group</th>
                  <th>Max players</th>
                </tr>
              </thead>
              <tbody>
                {ageGroups.map((ageGroup) => (
                  <tr key={ageGroup.key}>
                    <td>{ageGroup.label}</td>
                    <td>{ageGroup.squadLimit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
