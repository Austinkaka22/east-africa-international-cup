import Link from "next/link";
import { brand, editionLinks, mainNav } from "@/data/tournament";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className="eyebrow">{brand.tagline}</p>
            <h2>{brand.name}</h2>
            <p>
              A regional youth football platform celebrating academy talent, community,
              opportunity, and the shared spirit of East Africa.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <nav>
              {mainNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>1st Edition</h3>
            <nav>
              {editionLinks.slice(0, 7).map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>Contact</h3>
            <p>{brand.phone}</p>
            <p>{brand.email}</p>
            <p>{brand.officialDates}</p>
            <p>{brand.venue}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2027 {brand.name}. All rights reserved.</span>
          <span>Built for the 1st Edition MVP.</span>
        </div>
      </div>
    </footer>
  );
}
