import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ageGroups, editionLinks } from "@/data/tournament";

export const metadata = {
  title: "1st Edition"
};

export default function FirstEditionPage() {
  return (
    <>
      <PageHero
        eyebrow="1st Edition"
        title="The first chapter of a regional tournament."
        copy="A central hub for registration, guidelines, approved teams, applications, branding, downloads, gallery, fixtures, results, tables, and awards."
      />
      <section className="section">
        <div className="container grid three">
          {editionLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link className="card pad" href={item.href} key={item.href}>
                <Icon size={30} color="var(--green)" />
                <h3>{item.label}</h3>
                <p>Go to {item.label.toLowerCase()}.</p>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="section-tight band">
        <div className="container table-wrap">
          <table>
            <thead>
              <tr>
                <th>Age group</th>
                <th>Maximum players</th>
                <th>Guidance</th>
              </tr>
            </thead>
            <tbody>
              {ageGroups.map((ageGroup) => (
                <tr key={ageGroup.key}>
                  <td>{ageGroup.label}</td>
                  <td>{ageGroup.squadLimit}</td>
                  <td>Registration subject to organizer review and age eligibility checks.</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
