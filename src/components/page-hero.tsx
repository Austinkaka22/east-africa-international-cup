import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{copy}</p>
      </div>
    </section>
  );
}
