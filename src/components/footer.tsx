import Image from "next/image";
import Link from "next/link";
import { brand, mainNav, officialPartners } from "@/data/tournament";
import styles from "./footer.module.css";

export function Footer() {
  const utilityLinks = mainNav.filter((item) =>
    ["/", "/about", "/partners", "/contact"].includes(item.href)
  );

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.intro}>
            <p className="eyebrow">{brand.tagline}</p>
            <h2>Official partners</h2>
            <p>
              Recognising the organisations helping build a regional youth football
              platform for academy talent, community, and opportunity.
            </p>
          </div>
          <Link className="button gold" href="/partners">
            Become a partner
          </Link>
        </div>

        <div className={styles.partnerGrid}>
          {officialPartners.map((partner) => (
            <Link className={styles.partnerCard} href="/partners" key={partner.name}>
              <span className={styles.partnerLogo}>
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={260}
                  height={150}
                />
              </span>
              <strong>{partner.name}</strong>
              <span>{partner.role}</span>
            </Link>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© 2027 {brand.name}. All rights reserved.</span>
          <nav aria-label="Footer navigation">
            {utilityLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <span>
            {brand.phone} · {brand.email}
          </span>
          <span>
            {brand.officialDates} · {brand.venue}
          </span>
        </div>
      </div>
    </footer>
  );
}
