import { FormCard } from "@/components/form-card";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/data/tournament";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the organizing team."
        copy="Reach out for academy registration, partnerships, vendor opportunities, media, sponsorship, or general tournament questions."
      />
      <section className="section">
        <div className="container grid two">
          <div className="card pad">
            <h2>Contact details</h2>
            <p>{brand.phone}</p>
            <p>{brand.email}</p>
            <p>{brand.officialDates}</p>
            <p>{brand.venue}</p>
          </div>
          <FormCard
            title="Send a message"
            intro="Messages go to the organizing team by email once SMTP is configured."
            endpoint="/api/contact"
            submitLabel="Send message"
            fields={[
              { name: "name", label: "Your name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "subject", label: "Subject", required: true },
              {
                name: "message",
                label: "Message",
                type: "textarea",
                required: true,
                rows: 6
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
