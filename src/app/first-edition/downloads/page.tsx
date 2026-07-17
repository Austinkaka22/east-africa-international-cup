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
        copy="A central place for rules, registration forms, consent forms, policies, letters, and certificates for each tournament category."
      />
      <section className="section">
        <div className="container grid three">
          {ageGroups.map((ageGroup) => (
            <div className="card pad" key={ageGroup.key}>
              <FileText size={30} color="var(--green)" />
              <h3>{ageGroup.label}</h3>
              <p>Download the official documents for this category.</p>
              <ul className="check-list">
                {downloadDocuments.map((document) => (
                  <li key={document.title}>
                    {"href" in document ? (
                      <a href={document.href} download>
                        {document.title}
                      </a>
                    ) : (
                      <span>
                        {document.title}: {document.status}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
