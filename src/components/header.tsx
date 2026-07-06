"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, mainNav } from "@/data/tournament";
import styles from "./header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label={`${brand.name} home`}>
        <Image src="/assets/EACup.png" alt="" width={54} height={54} priority />
        <span>
          <strong>{brand.name}</strong>
          <small>{brand.tagline}</small>
        </span>
      </Link>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Main navigation">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link className={styles.cta} href="/first-edition/register" onClick={() => setOpen(false)}>
          Register
        </Link>
      </nav>
    </header>
  );
}
