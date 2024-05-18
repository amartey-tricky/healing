"use client";

import styles from "./style.module.css";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
        <div className={styles.menu}>
          <ThemeToggle />
          <button type="button" onClick={toggleMenu} className={styles.menuButton}>
            {isOpen ? (
              <XMarkIcon />
            ) : (
              <Bars3Icon />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}