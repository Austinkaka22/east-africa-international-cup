import { FormCard } from "@/components/form-card";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Branding Opportunities"
};

export default function BrandingPage() {
  return (
    <>
      <PageHero
        eyebrow="Branding"
        title="Put your brand in the tournament story."
        copy="Explore pitch-side branding, digital sponsor slots, booths, activations, poster placements, and community support packages."
      />
      <section className="section">
        <div className="container">
          <FormCard
            title="Branding inquiry"
            intro="Tell us what kind of visibility or sponsorship opportunity you are exploring."
            endpoint="/api/branding-inquiry"
            submitLabel="Send branding inquiry"
            fields={[
              { name: "organization", label: "Organization", required: true },
              { name: "contactName", label: "Contact person", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              {
                name: "interest",
                label: "Interest area",
                type: "select",
                options: [
                  "Pitch-side branding",
                  "Digital sponsor slot",
                  "Activation booth",
                  "Community package",
                  "Poster placement",
                  "Other"
                ],
                required: true
              },
              { name: "budget", label: "Indicative budget" },
              {
                name: "message",
                label: "Message",
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
