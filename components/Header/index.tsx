"use client";

import styles from "./index.module.css";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

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
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>Healing</div>
        <div className={styles.links}>
          {Links.map((link) => {
            return (
              <Link key={link.id} href={link.link}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className={styles.menu}>
          <ThemeToggle />
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className={styles.menuButton}
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
      </nav>
      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <nav className="flex flex-col top-0 left-0 fixed h-full w-[60%] backdrop-blur-md gap-9 text-xl items-center justify-evenly md:text-2xl md:font-semibold md:gap-12">
          {Links.map((link) => {
            return (
              <Link key={link.id} href={link.link} onClick={toggleMenu}>
                {link.name}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </Transition>
    </header>
  );
}
