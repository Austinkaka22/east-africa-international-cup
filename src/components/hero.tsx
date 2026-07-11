import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPinned } from "lucide-react";
import { Countdown } from "@/components/countdown";
import { brand, impactStats, tournamentKickoff } from "@/data/tournament";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className="eyebrow">{brand.tagline}</p>
        <h1>East Africa International Cup</h1>
        <p className="lead">
          Celebrating youth football as academies across the region gather to compete,
          connect, and showcase the next generation of talent.
        </p>
        <div className="btn-row">
          <Link className="button gold" href="/first-edition/register">
            Register a team <ArrowRight size={18} />
          </Link>
          <Link className="button secondary" href="/first-edition">
            Explore 1st Edition
          </Link>
        </div>
        <div className={styles.meta}>
          <span>
            <CalendarDays size={18} /> {brand.officialDates}
          </span>
          <span>
            <MapPinned size={18} /> {brand.venue}
          </span>
        </div>
        <Countdown target={tournamentKickoff} />
      </div>
      <div className={styles.visual}>
        <Image
          src="/assets/EACup.png"
          alt="East Africa International Cup emblem"
          width={720}
          height={720}
          priority
        />
      </div>
      <div className={styles.stats} aria-label="Tournament highlights">
        {impactStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
