import Image from "next/image";
import { Camera } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { galleryCategories } from "@/data/tournament";

export const metadata = {
  title: "Gallery"
};

const previewImages = [
  "/assets/welcome-page.png",
  "/assets/sunset-safari.png",
  "/assets/profile-cover.png"
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the tournament."
        copy="Photos, highlights, ceremonies, and videos will be curated here as the 1st Edition comes to life."
      />
      <section className="section-tight">
        <div className="container grid three">
          {previewImages.map((image, index) => (
            <Image
              className="card"
              src={image}
              alt="East Africa International Cup visual preview"
              width={900}
              height={650}
              key={image}
              priority={index === 0}
            />
          ))}
        </div>
      </section>
      <section className="section band">
        <div className="container grid three">
          {galleryCategories.map((category) => (
            <div className="card pad" key={category.title}>
              <Camera size={30} color="var(--green)" />
              <h3>{category.title}</h3>
              <p>{category.status}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
