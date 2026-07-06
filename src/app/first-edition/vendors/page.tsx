import { FormCard } from "@/components/form-card";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Vendor Applications"
};

export default function VendorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Vendors"
        title="Bring services to match day."
        copy="Food, beverage, merchandise, equipment, and service providers can register interest for vendor opportunities."
      />
      <section className="section">
        <div className="container">
          <FormCard
            title="Vendor application"
            intro="Vendor applications are reviewed by the organizing team before approval."
            endpoint="/api/vendor-application"
            submitLabel="Submit vendor interest"
            fields={[
              { name: "businessName", label: "Business name", required: true },
              { name: "contactName", label: "Contact person", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              {
                name: "category",
                label: "Category",
                type: "select",
                options: ["Food", "Beverage", "Merchandise", "Equipment", "Services", "Other"],
                required: true
              },
              {
                name: "requirements",
                label: "Stall or operating requirements",
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
