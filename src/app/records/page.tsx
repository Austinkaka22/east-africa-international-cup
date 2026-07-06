import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Player Records"
};

export default function RecordsPage() {
  return (
    <>
      <PageHero
        eyebrow="Records"
        title="Player of the tournament records."
        copy="A public archive for award winners by edition, discipline, academy, and player profile."
      />
      <section className="section">
        <div className="container grid three">
          {["Under 13", "Under 15", "Under 17"].map((discipline) => (
            <div className="card pad" key={discipline}>
              <h3>{discipline}</h3>
              <p>Winner to be announced after the 1st Edition.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
