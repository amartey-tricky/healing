"use client";

import styles from "./style.module.css";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle"

const Links = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Books",
    link: "/books",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
]

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>Healing</div>
        <div className={styles.links}>
          {Links.map((link) => {
            return (
              <Link key={link.id} href={link.link}>{link.name}</Link>
            )
          })}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  )
}