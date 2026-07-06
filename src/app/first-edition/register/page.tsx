import { FormCard } from "@/components/form-card";
import { PageHero } from "@/components/page-hero";
import { countries, disciplines } from "@/data/tournament";

export const metadata = {
  title: "Team Registration"
};

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Team registration"
        title="Register your academy team."
        copy="Submit your academy details for the 1st Edition. The organizing team will follow up by email or phone for documents and payment instructions."
      />
      <section className="section">
        <div className="container">
          <FormCard
            title="Team registration form"
            intro="This MVP form sends registration interest by email. Portal-based approvals and document uploads come later."
            endpoint="/api/team-registration"
            submitLabel="Submit team"
            fields={[
              { name: "academyName", label: "Academy name", required: true },
              {
                name: "country",
                label: "Country",
                type: "select",
                options: countries,
                required: true
              },
              {
                name: "discipline",
                label: "Discipline",
                type: "select",
                options: disciplines.map((item) => item.name),
                required: true
              },
              { name: "contactName", label: "Coach / contact person", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              {
                name: "playerCount",
                label: "Expected player count",
                type: "number",
                required: true
              },
              {
                name: "notes",
                label: "Notes",
                type: "textarea",
                rows: 4,
                placeholder: "Tell us anything the registration team should know."
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
