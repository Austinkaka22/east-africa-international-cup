import { FormCard } from "@/components/form-card";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Work With Us"
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work with us"
        title="Help deliver the tournament experience."
        copy="Apply for operational roles including volunteers, referees, marshals, medical support, media, and event operations."
      />
      <section className="section">
        <div className="container">
          <FormCard
            title="Work application"
            intro="Tell the organizing team how you would like to support the 1st Edition."
            endpoint="/api/work-application"
            submitLabel="Apply"
            fields={[
              { name: "name", label: "Full name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              {
                name: "role",
                label: "Preferred role",
                type: "select",
                options: ["Volunteer", "Referee", "Marshal", "Medical", "Media", "Operations"],
                required: true
              },
              { name: "availability", label: "Availability", required: true },
              {
                name: "experience",
                label: "Relevant experience",
                type: "textarea",
                required: true
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
