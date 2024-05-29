import styles from "./index.module.css";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.fc}>
        <div className={styles.nav}>
          <h1 className={styles.header}>
            Dr Ambrose Togobo
          </h1>
          <p className={styles.p}>
          &copy; Copyright {new Date().getFullYear()} <Link href="/" className={styles.link}>Dr. Ambrose Togobo</Link>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}