import Image from "next/image";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Posters"
};

export default function PostersPage() {
  return (
    <>
      <PageHero
        eyebrow="Posters"
        title="Official event artwork and announcements."
        copy="Poster slots are ready for campaign images, social cards, launch graphics, and registration announcements."
      />
      <section className="section">
        <div className="container grid two">
          <Image
            className="card"
            src="/assets/profile-cover.png"
            alt="East Africa International Cup official profile cover artwork"
            width={1200}
            height={675}
          />
          <Image
            className="card"
            src="/assets/welcome-page.png"
            alt="Karibu East Africa profile artwork"
            width={1200}
            height={675}
          />
        </div>
      </section>
    </>
  );
}
