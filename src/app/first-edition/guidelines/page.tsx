import { PageHero } from "@/components/page-hero";
import { disciplines } from "@/data/tournament";

export const metadata = {
  title: "Registration Guidelines"
};

export default function GuidelinesPage() {
  const steps = [
    "Choose the correct discipline and confirm squad size.",
    "Submit academy, coach, and contact details through the registration form.",
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
                  <th>Discipline</th>
                  <th>Max players</th>
                </tr>
              </thead>
              <tbody>
                {disciplines.map((discipline) => (
                  <tr key={discipline.key}>
                    <td>{discipline.name}</td>
                    <td>{discipline.players}</td>
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
