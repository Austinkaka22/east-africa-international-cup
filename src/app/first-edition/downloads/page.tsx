import { FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ageGroups, downloadDocuments } from "@/data/tournament";

export const metadata = {
  title: "Download Centre"
};

export default function DownloadCentrePage() {
  return (
    <>
      <PageHero
        eyebrow="Download centre"
        title="Tournament documents by age category."
        copy="A central place for rules, registration lists, consent forms, policies, letters, and certificates once official documents are ready for release."
      />
      <section className="section">
        <div className="container grid three">
          {ageGroups.map((ageGroup) => (
            <div className="card pad" key={ageGroup.key}>
              <FileText size={30} color="var(--green)" />
              <h3>{ageGroup.label}</h3>
              <p>Official downloads will be added for this category.</p>
              <ul className="check-list">
                {downloadDocuments.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
